export interface Event {
  id: string
  name: string
  description: string
  date: string
  time: string
  prize: string
  requirements: string
  image: string
  status: string
  link: string
}

export const events: Event[] = [
  {
    id: "hegemony-tournament",
    name: "Hegemony Tournament",
    description: "",
    date: "",
    time: "3:00 PM EST",
    prize: "5,000 ROBUX + Hegemony Title",
    requirements: "Minimum Rally: 20 Fighters",
    image: "",
    status: "",
    link: ""
  }
]
