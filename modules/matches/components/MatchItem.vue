<script lang="ts" setup>
import { format } from 'date-fns'
import type { IEvent, IStandingParticipant } from '~/interfaces/standings.interface'
interface IPropsParticipants {
  home: IStandingParticipant
  away: IStandingParticipant
}
const props = defineProps<{ match: IEvent; participants: IPropsParticipants }>()
const getSlugForImg = (key: 'home' | 'away') => props.participants[key].frontConfig.logos.default?.replace('500_500.png', '30_30.png')
const getLiveMin = (time: string) => (`${time.split(':')[0]}'`)
</script>

<template>
  <div class="fb-match fb-flex-center">
    <div class="start-block" :class="match.eventStatus.live ? 'text-amber-400' : 'text-neutral-400'">
      <template v-if="match.eventStatus.notStarted">
        {{ format(new Date(match.startTime), "HH:mm") }}
      </template>
      <template v-else-if="match.eventStatus.live && match.eventClock">
        {{ getLiveMin(match.eventClock) }}
      </template>
      <!-- <template v-else>
        {{ match.eventStatus.titleRuShort }}
      </template> -->
    </div>
    <div class="center-block">
      <div class="team home" :class="[(match.competitors[0].place === 1) && match.eventStatus.ended && 'font-bold']">
        {{ participants.home.titleRu }}
      </div>
      <div class="fb-flex-center">
        <img
          v-if="getSlugForImg('home')"
          style="height: 24px;width: 24px;"
          :src="`/m/${getSlugForImg('home')}`"
        >
        <Icon v-else name="unknown-team" />
        <div class="scores">
          <template v-if="match.eventStatus.notStarted">
            —
          </template>
          <template v-else>
            {{ match.competitors[0].results[0] && match.competitors[0].results[0].value }}
            :
            {{ match.competitors[1].results[0] && match.competitors[1].results[0].value }}
          </template>
        </div>
        <img
          v-if="getSlugForImg('away')"
          style="height: 24px;width: 24px;"
          :src="`/m/${getSlugForImg('away')}`"
        >
        <Icon v-else name="unknown-team" />
      </div>
      <div class="team away" :class="[(match.competitors[1].place === 1) && match.eventStatus.ended && 'font-bold']">
        {{ participants.away.titleRu }}
      </div>
    </div>
    <div class="end-block">
      <!-- <Icon v-if="match.eventStatus.notStarted" name="notifications-outline" style="width: 20px;height: 20px;" /> -->
    </div>
  </div>
</template>

  <style lang="less">
  .fb-flex-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .text-neutral-400 {
    color: rgb(163, 163, 163);
  }
  .text-amber-400 {
    color: rgb(251 191 36);
  }
  .font-bold {
    font-weight: 700;
  }
  .fb-match {
    width: 100%;
    font-size: 13px;
    line-height: 24px;
    display: grid;
    grid-template-columns: 62px 1fr 36px;
    .start-block {
      width: 56px;
    }
    .end-block {
      text-align: right;
      display: flex;
      justify-content: flex-end;
      width: 36px;
    }
    .center-block {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      .fb-flex-center {
        width: 84px;
      }
      .team {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &.home {
          text-align: end;
          margin-inline: 8px;
        }
        &.away {
          margin-inline: 8px;
        }
      }
      .scores {
        text-align: center;
        width: 36px;
      }
    }
  }
  </style>
