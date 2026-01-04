//
//  ContentView.swift
//  ShiningACGApp
//
//  Created by 落殇 on 2026/1/1.
//

import SwiftUI
import WebKit
import Foundation

struct ContentView: View {
  let url=URL(string: "http://video.gach1koi.site")
  
  var body: some View {
    let _ = print(url ?? "")
    if let url {
      WebView(url: url)
    }else {
      Text("内容加载失败")
    }
  }
}

#Preview {
  ContentView()
}
