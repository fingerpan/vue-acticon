/**
* Created by youngpan on 2017/3/10.
*/
<script>

  const UNITREG = /^[\.\d]+(rem|px|%)$/;

  export default {
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
        return this.color || this.$parent.color || "#999";
      },
      iconSize() {
        let size = this.size;
        // 有单位的字符串。
        if (size && typeof size === 'string' && size.search(UNITREG) !== -1) {
          return size;
        } else {
          return parseFloat(size) + 'px';
        }
      },
    }
  }

</script>

