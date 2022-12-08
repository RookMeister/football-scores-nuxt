import type { IRegion, ISport } from './other.interface'

export interface ICompetitionsResponce {
  items: ICompetition[]
}
interface ICompetition {
  id: number
  urn: string
  title: string
  sport: ISport
  titleShort?: string
  image?: string
  pageBackground?: string
  mobileBackground?: string
  leagueType: string
  region: IRegion
}

export interface ICompetitionResponce {
  header: ICompetitionHeader
  materials: { items: [] }
  topNews: { items: [] }
  allNews: { items: [] }
  sports: {}
  tags: {}
  infoTags: ICompetitionInfoTags[]
  videos: { items: [] }
  tabs: ['calendar', 'review', 'statistics', 'teams']
  stages: {
    items?: ICompetitionStages[]
    actualId?: number
  }
}
interface ICompetitionHeader {
  id: number
  urn: string
  title: string
  titleShort: string
  longTitle: string
  sport: ISport
  image: string
  pageBackground: string
  mobileBackground: string
  leagueType: string
  seasons: ISeason[]
  officialSite: string
}
export interface ICompetitionStages extends ICompetitionStagesGroups {
  stageType: 'LEAGUE' | 'CUP'
}
export interface ICompetitionStagesGroups {
  id: number
  titleRu: string
  priority: number
  system: boolean
}
export interface ICompetitionInfoTags {
  id: number
  oldId: string
  editDate: number
  creationDate: number
  published: boolean
  archived: boolean
  title: string
  urn: string
  imageUri: string
  logoImageUri: string
  sportId: number
  tagType: string
  description: any[]
}
interface ISeason {
  id: number
  urn: string
  title: string
  year: string
  actual: boolean
}
