# [vue-acticon](http://www.acticon.top)

> an vue.js move icon  


## Installation

``` shell
npm install vue-acticon --save
```
## Usage

Import the Acticon components whice you need 

```js
 import  { musicLine }  from  "vue-acticon"; 

   or:
    
 import {musicLine as "your name" } from "vue-acticon";
   
```
also you can chose a single file:
```js

import "your name" from "vue-acticon/dist/**.vue"  

```
example:

```html

<template>
    <div>
        <music-line :size="size" :color="color" ></music-line>
    </div>
</templage>

<script>
  ...
  import { musicLine } from "vue-acticon"
  ...
  
  export default{
      data() {
          return {
            size:"30",
            color:"#ccc"
          }
      },
      components:{
        musicLine
      }
  }
  
</script>

```

## the porps

###  size  

>——设置acticon图标大小
  
 >> - type : [Number,String]
 >> - defaule : 30
 
 **attention**
 - 图标为正方型。
 - 图标尺寸单位支持使用rem,px,%,em; 如果没有单位，则默认为px;
 - 建议使用数字。单位默认为px
 
### color  
>——设置acticon图标颜色
 
 >> - type : String
 >> - defaule : $parent.color  || parentNode.style.color || "#999"
 
 **attention**
 - 颜色可以是6位十六进制颜色、rgba、颜色,
 - 默认颜色:
    + 1.寻找父组件data中color属性值。
    + 2.寻找父节点的color样式属性值。
    + 3.如果父节点的color样式属性值为黑色，则使用"#999"。

 
## the icon list 
  - music-line
  - wave-line
  - scaling-line
  - icon-set
  - icon-shock
  - icon-wifi
  - icon-photo
  - icon-weixin
  - refresh-round
  - drop-round
  - help-round
  - ripple-round
  - double-round
  
  

