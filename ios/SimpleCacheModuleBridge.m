//
//  SimpleCacheModuleBridge.m
//  RedditReactReduxNative
//
//  Created by raymond on 9/2/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(SimpleCacheModule, NSObject)

RCT_EXTERN_METHOD(putString:(NSString *)key value:(NSString *) value)
RCT_EXTERN_METHOD(getString:(NSString *)key callback:(RCTResponseSenderBlock *) callback)

@end