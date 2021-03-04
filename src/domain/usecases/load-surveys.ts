import { SurveyModel } from '@/domain/models'

export interface LoadSurveys {
  load: (accountId: string) => Promise<SurveyModel[]>
}

export namespace LoadSurveys {
  export type Result = SurveyModel[]
}
