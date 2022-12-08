import type { ICompetitionStages, ICompetitionStagesGroups } from './competitions.interface'

export interface ICompetitionStandingLeagueResponce {
  '@type': string
  items: IStandingItem[]
  events: { [key: number]: IEvent }
  participants: { [key: number]: IStandingParticipant }
  stage: ICompetitionStages
  stageGroups: { [key: number]: ICompetitionStagesGroups }
}
export interface ICompetitionStandingCupResponce {
  '@type': string
  cupRounds: IStandingCupRounds[]
  participants: { [key: number]: IStandingParticipant }
  stage: ICompetitionStages
}
export interface IStandingParticipant {
  '@type': string
  national: boolean
  areaDto: {
    titleRu: string
    alpha2: string
    alpha3: string
    frontConfig: { '@class': string; logos: { default: string } }
  }
  frontConfig: {
    '@class': string
    logos: { default: string }
    color: string
    mobileBackgrounds: { default: string }
    siteBackgrounds: { default: string }
  }
  id: number
  urn: string
  titleRu: string
  titleRuShort: string
  virtual: boolean
  cityTitleRu: string
}
interface IStandingItem {
  stageGroupId: number
  participantId: number
  eventIds: number[]
  standingTable: IStandingTable
  standingsType: 'FIRST_HALF_HOME' | 'HOME' | 'FIRST_HALF_AWAY' | 'SECOND_HALF_HOME' | 'TOTAL' | 'SECOND_HALF_AWAY' | 'SECOND_HALF_TOTAL' | 'AWAY'
  outcome?: string
  outcomeColor?: string
}
interface IStandingTable {
  win: number
  draw: number
  loss: number
  rank: number
  change: number
  played: number
  points: number
  goalsFor: number
  goalsDiff: number
  goalsAgainst: number
}
export interface IEvent {
  seasonId: number
  competitors: IEventCompetitors[]
  eventClock?: string
  stageIds: { id: number; groupIds: number[] }[]
  id: number
  urn: string
  startTime: number
  finishTime: number
  confirmedTime: boolean
  technical: boolean
  titleRu: string
  titleRuShort: string
  reviewUrl?: string
  eventStatus: {
    titleRu: string
    id: string
    commonStatus: string
    titleRuShort: string
    live: boolean
    ended: boolean
    notStarted: boolean
    frontConfig: {
      '@class': string
      text: boolean
      time: boolean
      scores: boolean
    }
  }
  roundDto: { titleRu: string; priority: number; periodUrn: string }
  priority: number
  frontConfig: { '@type': string; attendance: number; neutralVenue: boolean; channels: { country: string; name: string }[] }
  eventType: { frontConfig: { '@class': string; config: [] }; urn: string; titleRu: string }
  medalEvent: boolean
}
export interface IEventCompetitors {
  participantId: number
  priority: number
  results: {
    value: number
    valueType: string
    summaryType: string
    periodType: string
    periodName: string
    summaryTitle: string
    periodTitle: string
    periodPriority: number
  }[]
  place: number
}
interface IStandingCupRounds {
  roundTitle: string
  roundPriority: number
  eventGroups: { events: IEvent[]; wins: { participantId: number; wins: number }[] }[]
}
