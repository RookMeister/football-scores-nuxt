<script setup lang="ts">
  interface IPropsButton {
    href?: string
    size?: 'small' | 'default' | 'large'
    disabled?: boolean
    expand?: 'full' | 'block'
    fill?: 'clear' | 'outline' | 'solid' | 'default'
  }
import { ref } from 'vue';
const props = defineProps<IPropsButton>();

</script>

<template>
  <button 
    :class=[]
  >
    666
          <!-- [`${buttonType}-${expand}`]: expand !== undefined,
          [`${buttonType}-${finalSize}`]: finalSize !== undefined,
          [`${buttonType}-${shape}`]: shape !== undefined,
          [`${buttonType}-${fill}`]: true,
          [`${buttonType}-strong`]: strong,
          'in-toolbar': hostContext('ion-toolbar', this.el),
          'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
          'button-has-icon-only': hasIconOnly,
          'button-disabled': disabled,
          'ion-activatable': true,
          'ion-focusable': true,
        })} -->
  </button>
</template>