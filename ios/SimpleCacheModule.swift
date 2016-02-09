//
//  SimpleCacheModule.swift
//  RedditReactReduxNative
//
//  Created by raymond on 9/2/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Foundation

@objc(SimpleCacheModule)
class SimpleCacheModule : NSObject {
  
  var defaults = NSUserDefaults.standardUserDefaults()
  
  @objc func putString(key: String, value: String) {
    defaults.setObject(value, forKey: key)
    print(defaults.stringForKey(key))
  }
  
  @objc func getString(key: String, callback: RCTResponseSenderBlock) {
    let value = defaults.stringForKey(key)
    if (value == nil) {
      callback([])
    } else {
      callback([value!])
    }
  }
}