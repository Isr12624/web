export interface EventAgendaItem {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
}

export interface EventSpeaker {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  github?: string;
}

export interface EventFaq {
  question: string;
  answer: string;
}

export interface CommunityEvent {
  slug: string;
  id: string;
  title: string;
  trackTag: string;
  dateBadge: string;
  startDateIso: string;
  endDateIso: string;
  timeString: string;
  location: string;
  venueName: string;
  venueAddress: string;
  venueType: 'outdoor' | 'in-person' | 'hybrid' | 'virtual';
  image: string;
  description: string;
  fullOverview: string[];
  highlights: string[];
  agenda: EventAgendaItem[];
  prerequisites: string[];
  whatToBring: string[];
  speakers: EventSpeaker[];
  faqs: EventFaq[];
  isSuper?: boolean;
  superBadge?: string;
  theme: 'grass' | 'hacktoberfest' | 'linux' | 'git' | 'selfhost';
  calTitle: string;
  calStart: string;
  calEnd: string;
  calLocation: string;
  registrationUrl: string;
  capacity?: string;
  cost: string;
}

export const events: CommunityEvent[] = []; // ponytail: events come from GitHub issues; empty = offline fallback

export function getEventBySlug(slug: string): CommunityEvent | undefined {
  return events.find((evt) => evt.slug === slug);
}

export function getAllEvents(): CommunityEvent[] {
  return events;
}

export async function getDynamicEvents(): Promise<CommunityEvent[]> {
  const { fetchEventsFromGitHub } = await import('../utils/github-events');
  return fetchEventsFromGitHub();
}
