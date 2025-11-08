export type CV = {
  title: string,
  position: string,
  summary?: string,
  skills?: string,
  experience?: string,
  edu?: string,
}

export type User = {
  name: string,
  email: string,
  github_url: string,
  linkedin_url: string,
  bio: string,
}

export type Test = {
  title: string,
  time_limit: number,
  tags: string[]
  tasks: { type: string, data: any }[]
}