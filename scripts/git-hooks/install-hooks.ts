#!/usr/bin/env -S deno run --allow-read --allow-write --allow-run

/**
 * 安装 Git Hooks
 * 将脚本复制到 .git/hooks 目录
 */

console.log("🔧 Installing Git hooks...\n");

const hooks = [
  {
    name: "pre-commit",
    script: "scripts/git-hooks/pre-commit.ts",
  },
  {
    name: "commit-msg",
    script: "scripts/git-hooks/commit-msg.ts",
  },
];

for (const hook of hooks) {
  const hookPath = `.git/hooks/${hook.name}`;
  const hookContent = `#!/bin/sh
# Auto-generated Git hook

deno run --allow-read --allow-run --allow-env ${hook.script} "$@"
`;

  try {
    await Deno.writeTextFile(hookPath, hookContent);
    await Deno.chmod(hookPath, 0o755);
    console.log(`✅ Installed ${hook.name} hook`);
  } catch (error) {
    console.error(`❌ Failed to install ${hook.name} hook:`, error instanceof Error ? error.message : String(error));
  }
}

console.log("\n✨ Git hooks installed successfully!");
console.log("\nThe following hooks are now active:");
for (const hook of hooks) {
  console.log(`  • ${hook.name}`);
}
