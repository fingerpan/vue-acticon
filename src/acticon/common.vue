/**
* Created by youngpan on 2017/3/10.
*/
<script>

  const UNITREG = /^[\.\d]+(rem|px|%|em)$/;
  const DEFAULTSIZE = "30px";
  const DEFAULTCOLOR = "#999";

  /** 用柯里化定义一个getStyle;
   * 返回元素的css样式值
   * @param el   传入所要获得的元素
   * @param attr  传入所要获得的css属性
   * @returns {* 返回指定的元素中指定css样式的属性值}
   */
  const getStyle = function () {
    if (window.getComputedStyle) {
      return function (el, attr) {
        return window.getComputedStyle(el, null)[attr]
      }
    } else {
      return function (el, attr) {
        return el.currentStyle[attr]
      }
    }
  }();
  //
  //  const getStyle = function () {
  //    let isW3C = false;
  //    if (window.getComputedStyle) {
  //      isW3C = true;
  //    }
  //    return function (el, attr) {
  //      if (isW3C) {
  //        return window.getComputedStyle(el, null)[attr]
  //      } else {
  //        return el.currentStyle[attr]
  //      }
  //    }
  //  }();

  export default {
    data() {
      return {
        parentNodeColor: ""
      }
    },
    props: {
      "size": {
        type: [Number, String],
        default: 30
      },
      "color": {
        type: String,
      },
    },
    computed: {
      iconColor() {
        // 是否有传入color || 父级组件中是否color || 父节点有没有定义颜色(非黑色即可);
        let color = this.color || this.$parent.color || this.parentNodeColor;
        if (!color) {
          color = DEFAULTCOLOR;
          this.$nextTick(() => {
            let parentNodeColor = getStyle(this.$el.parentNode, 'color');
            // 非黑色
            if (parentNodeColor !== "rgb(0, 0, 0)") {
              this.parentNodeColor = parentNodeColor;
            }
          })
        }
        return color
      },
      iconSize() {
        let size = this.size;
        // 考虑 "0" (字符串0) 的情况。
        if (!size || !parseInt(size)) {
          return DEFAULTSIZE;
        }
        // 带有单位的字符串。 rem / % / px
        if (typeof size === 'string' && size.search(UNITREG) !== -1) {
          return size;
        } else {
          // 解析数字，字符串数字，带有非标准单位，全解析为px单位。
          return `${parseFloat(size)}px`;
        }
      }
    },
  }

</script>

