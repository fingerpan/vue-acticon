/**
* Created by youngpan on 2017/3/12.
*/


<script>

  import {iconARR} from "../acticon/index.js"

  export default{
    functional: true,
    props: {
      iconname: {
        type: String,
      }
    },
    render(createElement,context) {
      let name = context.props.iconname;
      let iconCom = null;
      iconARR.forEach((val) => {
        if (name === val.name) {
          iconCom = val;
        }
      })
      var icontag = createElement(iconCom, {
        props: {
          color: "#999"
        }
      });
      var tooltip = createElement("Tooltip", {attrs: {content:name}}, [icontag])
      var routers = createElement('router-link', {attrs: {'to': `/acticon/${name}`}}, [
                    createElement("li", [tooltip])])
      return routers
    }
  }

</script>
