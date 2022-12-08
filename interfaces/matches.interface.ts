import type { IEvent, IStandingParticipant } from './standings.interface'
import type { ICompetitionStagesGroups } from './competitions.interface'

export interface IMatchesSeasons { [key: number]: IMatchesSeason }

export interface IMatchesResponce {
  items: IEvent[]
  seasons: IMatchesSeasons
  participants: { [key: number]: IStandingParticipant }
  stages: { [key: number]: ICompetitionStagesGroups }
  stageGroups: { [key: number]: ICompetitionStagesGroups }
  reviews?: any
}

interface IMatchesSeason {
  id: number
  urn: string
  toDate: string
  fromDate: string
  titleRu: string
  year: string
  frontConfig: { '@class': string }
  competition: {
    priority: number
    prioritySum: number
    sport: { id: number; urn: string; titleRu: string; priority: number }
    frontConfig: { '@class': string; logos: { default: string } }
    titleRu: string
    titleRuShort: string
    urn: string
  }
}
