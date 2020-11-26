<!-- =========================================================================================
    File Name: VxDialogs.vue
    Description: Dialogs Component
    Component Name: VxDialog
    ----------------------------------------------------------------------------------------
     
========================================================================================== -->

<template lang="html">
  <transition name="popup-t">
    <div
      v-show="active"
      ref="con"
      :class="[`vs-popup-${color}`, { fullscreen: fullscreen }]"
      class="vs-component con-vs-popup mcp-dialog"
      @click="close($event, true)"
    >
      <div :style="styleCon" class="vs-popup--background" />
      <div ref="popupx" :style="stylePopup" class="vs-popup">
        <!-- //header -->
        <header :style="styleHeader" class="vs-popup--header">
          <div class="vs-popup-mcp--title">
            <slot name="header">
              <h3>{{ title }}</h3>
            </slot>
          </div>
          <vs-icon
            v-if="!buttonCloseHidden"
            ref="btnclose"
            :icon-pack="iconPack"
            :icon="iconClose"
            :style="stylePopup"
            class="vs-popup--close vs-popup--close--icon"
            @click="close"
          />
        </header>

        <!-- // slots  -->
        <div
          :style="styleContent"
          :class="classContent"
          class="vs-popup--content"
        >
          <slot />
        </div>
        <footer>
          <slot name="footer"> </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import _color from "../../assets/utils/color";
export default {
  name: "VsDialog",
  props: {
    color: {
      default: "primary",
      type: String
    },
    active: {
      default: false,
      type: Boolean
    },
    title: {
      default: "popup",
      type: String
    },
    buttonCloseHidden: {
      default: false,
      type: Boolean
    },
    fullscreen: {
      default: false,
      type: Boolean
    },
    backgroundColor: {
      default: null,
      type: String
    },
    backgroundColorPopup: {
      default: "rgb(255,255,255)",
      type: String
    },
    styleContent: {
      default: null,
      type: String
    },
    classContent: {
      default: null,
      type: String
    },
    iconPack: {
      default: "material-icons",
      type: String
    },
    iconClose: {
      default: "close",
      type: String
    }
  },
  computed: {
    styleHeader() {
      return {
        color: _color.getColor(this.color, 1)
      };
    },
    styleAfter() {
      return {
        background: _color.getColor(this.color, 1)
      };
    },
    styleCon() {
      return {
        background: _color.getColor(this.backgroundColor, 1)
      };
    },
    stylePopup() {
      return {
        background: _color.getColor(this.backgroundColorPopup, 1)
      };
    }
  },
  mounted() {
    this.insertBody();
  },
  beforeDestroy() {
    // close the left open prompt
    const elx = this.$refs.con;
    if (document.body) {
      document.body.removeChild(elx);
    }
  },
  methods: {
    giveColor(color) {
      return _color.rColor(color);
    },
    close(event, con) {
      if (con) {
        if (
          event.target.className &&
          event.target.className.indexOf &&
          event.target.className.indexOf("vs-popup--background") !== -1
        ) {
          this.$emit("update:active", false);
          this.$emit("close", false);
        } else if (
          !this.buttonCloseHidden &&
          event.srcElement === this.$refs.btnclose.$el
        ) {
          this.$emit("update:active", false);
          this.$emit("close", false);
        }
      }
    },
    insertBody() {
      const elx = this.$refs.con;
      document.body.insertBefore(elx, document.body.firstChild);
    }
  }
};
</script>
<style>
.mcp-dialog .vs-popup--header {
  background: #fff;
  border-radius: 8px 8px 0px 0px;
  padding: 18px 20px;
}
.mcp-dialog .vs-popup--header h2 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
}
.mcp-dialog .vs-popup--content {
  background: #f7f8fa;
  /* border-radius: 8px; */
  max-height: 400px;
}
</style>
