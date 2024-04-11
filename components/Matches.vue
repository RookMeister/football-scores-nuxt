<script setup lang="ts">
import type { IMatchesLeague, IMatchStatus } from '~/interfaces/matches'
import { format } from 'date-fns'
import Icon from './Icon.vue';

interface IProps {
  item: IMatchesLeague
}
defineProps<IProps>()
</script>
<template>
  <div class="list">
    <a class="px-16px py-8px flex items-center league" >
			<img :src="`/logo/leaguelogo/${ item.primaryId }.png`" class="mr-2 h-16px w-16px "  width="16" height="16" loading="lazy">
			{{ item.name}}
		</a>
		<div v-if="item.isGroup" class="p-8px">
			<span class="group py-4px px-8px">
				Group {{ item.groupName }}
			</span>
		</div>
		<a v-for="match in item.matches" :key="match.id" class="px-16px py-8px min-h-56px grid items-center justify-center hover:bg-gray-200 transition duration-200 cursor-pointer">
			<div class="flex items-center">
				<div v-if="match.status.liveTime || match.status.reason" class="status" :class="{'liveTime': match.status.liveTime, 'reason': match.status.reason}">
					<template v-if="match.status.liveTime">{{ match.status.liveTime.short }}</template>
					<template v-if="match.status.reason">{{ match.status.reason.short }}</template>
				</div>
				<div class="ml-auto">{{ match.home.name }}</div>
				<img :src="`/logo/teamlogo/${match.home.id}_xsmall.png`" class="ml-2 h-20px w-20px "  width="16" height="16" loading="lazy">
			</div>
			<div class="text-center" :class="{'cancelled': match.status.cancelled}">
				<div class="px-2px" style="display: grid;grid-template-columns: 1fr 1fr;column-gap: 5px;">
					<div class="flex items-center gap-1px justify-start">
						<Icon v-for="i in match.status.homeRedCards" name="red-card" />
					</div>
					<div class="flex items-center gap-1px justify-end">
						<Icon v-for="i in match.status.awayRedCards" name="red-card" />
					</div>
				</div>
				<div v-if="!match.status.started || match.status.cancelled">{{ format(match.timeTS, 'HH:mm') }}</div>
				<div v-if="match.status.scoreStr">{{ match.status.scoreStr }}</div>
				<div v-if="match.status.aggregatedStr" class="aggregated">({{ match.status.aggregatedStr }})</div>
			</div>
			<div class="flex items-center">
				<img :src="`/logo/teamlogo/${match.away.id}_xsmall.png`" class="mr-2 h-20px w-20px "  width="16" height="16" loading="lazy">
				<span>{{ match.away.name }}</span>
			</div>
		</a>
  </div>
</template>
<style lang="less">
.list {
	overflow: hidden;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 1.0);
  border: 1px solid  rgba(240, 240, 240, 1.0);
	.league {
		background-color: rgba(230, 230, 230, 1.0);
	}
	a:not(.league) {
		grid-template-columns: 1fr 40px 1fr;
    column-gap: 12px;
	}
	.group {
    color: var(--GlobalColorScheme-Text-secondaryText3);
    border: 1px solid rgba(245, 245, 245, 1.0);
    border-radius: 8px;
	}
	.aggregated {
		color: rgba(113, 113, 113, 1.0);
		font-size: 12px;
	}
	.status {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 24px;
    height: 20px;
    padding: 10px 6px;
    font-size: 12px;
    text-align: center;
    border-radius: 10px;
	}
	.liveTime {
		background-color: rgba(0, 152, 95, 1.0);
    color: rgb(255, 255, 255);
	}
	.reason {
		background-color: rgba(245, 245, 245, 1.0);
    color: rgba(159, 159, 159, 1.0);
	}
	.cancelled {
		text-decoration: line-through;
		color: rgba(159, 159, 159, 1.0);
	}
}
</style>
