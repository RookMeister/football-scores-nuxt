<script setup lang="ts">
  import { VNode, h } from 'vue';
  import { SPINNERS } from './config';

  type SPINNERNAME = 'bubbles' | 'circles' | 'circular' | 'crescent' | 'dots' | 'lines' | 'lines-sharp' | 'lines-sharp-small' | 'lines-small';
  const props = withDefaults(defineProps<{ name?: SPINNERNAME }>(), { name: 'lines' });

  const spinner = SPINNERS[props.name] || SPINNERS['lines'];

  const buildCircle = (spinner: any, duration: number, index: number, total: number) => {
    const data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + 'ms';

    return h('svg', { style: data.style, viewBox: data.viewBox || '0 0 64 64' },
      h('circle', {
        transform: data.transform  || 'translate(32,32)',
        cx: data.cx,
        cy: data.cy,
        r: data.r,
        style: spinner.elmDuration ? { animationDuration: duration + 'ms' } : {}
      })
    );
  };

  const buildLine = (spinner: any, duration: number, index: number, total: number) => {
    const data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + 'ms';

    return h('svg', { style: data.style, viewBox: data.viewBox || '0 0 64 64' },
      h('line', { transform: 'translate(32,32)', y1: data.y1, y2: data.y2})
    );
  };

  const svgs: VNode[] = [];

  if (spinner.circles !== undefined) {
    for (let i = 0; i < spinner.circles; i++) {
      svgs.push(buildCircle(spinner, spinner.dur, i, spinner.circles));
    }
  } else if (spinner.lines !== undefined) {
    for (let i = 0; i < spinner.lines; i++) {
      svgs.push(buildLine(spinner, spinner.dur, i, spinner.lines));
    }
  }

  const render = () => {
    return h('div', { class: `spinner spinner-${props.name}` }, svgs);
  };

</script>

<template>
  <render />
</template>

<style lang="less">
.spinner {
  display: inline-block;
  position: relative;
  width: 28px;
  height: 28px;
  color: var(--color-spinner);
  user-select: none;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateZ(0);
  }

    // Spinner: lines / lines-small / lines-sharp / lines-sharp-small
    // --------------------------------------------------

    &.spinner-lines line,
    &.spinner-lines-small line {
      stroke-width: 7px;
    }

    &.spinner-lines-sharp line,
    &.spinner-linessharp-small line {
      stroke-width: 4px;
    }

    &.spinner-lines line,
    &.spinner-lines-small line,
    &.spinner-lines-sharp line,
    &.spinner-lines-sharp-small line {
      stroke-linecap: round;
      stroke: currentColor;
    }

    &.spinner-lines svg,
    &.spinner-lines-small svg,
    &.spinner-lines-sharp svg,
    &.spinner-line-sharp-small svg {
      animation: spinner-fade-out 1s linear infinite;
    }


    // Spinner: bubbles
    // --------------------------------------------------

    &.spinner-bubbles svg {
      animation: spinner-scale-out 1s linear infinite;
      fill: currentColor;
    }


    // Spinner: circles
    // --------------------------------------------------

    &.spinner-circles svg {
      animation: spinner-fade-out 1s linear infinite;
      fill: currentColor;
    }


    // Spinner: crescent
    // --------------------------------------------------

    &.spinner-crescent circle {
      fill: transparent;
      stroke-width: 4px;
      stroke-dasharray: 128px;
      stroke-dashoffset: 82px;
      stroke: currentColor;
    }

    &.spinner-crescent svg {
      animation: spinner-rotate 1s linear infinite;
    }


    // Spinner: dots
    // --------------------------------------------------

    &.spinner-dots circle {
      stroke-width: 0;
      fill: currentColor;
    }

    &.spinner-dots svg {
      animation: spinner-dots 1s linear infinite;
    }


    // Spinner: circular
    // --------------------------------------------------

    &.spinner-circular svg {
      animation: spinner-circular linear infinite;
    }

    &.spinner-circular circle {
      animation: spinner-circular-inner ease-in-out infinite;
      stroke: currentColor;
      stroke-dasharray: 80px, 200px;
      stroke-dashoffset: 0px;
      stroke-width: 5.6;
      fill: none;
    }


    // Spinner: paused
    // --------------------------------------------------

    &.spinner-paused,
    &.spinner-paused svg,
    &.spinner-paused circle {
      animation-play-state: paused;
    }
}

// Animation Keyframes
// --------------------------------------------------

@keyframes spinner-fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }

}

@keyframes spinner-scale-out {
  0% {
    transform: scale(1, 1);
  }

  100% {
    transform: scale(0, 0);
  }

}

@keyframes spinner-rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }

}

@keyframes spinner-dots {
  0% {
    transform: scale(1, 1);

    opacity: .9;
  }

  50% {
    transform: scale(.4, .4);

    opacity: .3;
  }

  100% {
    transform: scale(1, 1);

    opacity: .9;
  }
}

@keyframes spinner-circular {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinner-circular-inner {
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
}
</style>