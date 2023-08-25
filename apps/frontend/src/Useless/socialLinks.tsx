export const socials = (link: string, title: string, text: string) => [
  {
    outlet: 'LinkedIn',
    href: `https://www.linkedin.com/shareArticle?url=${link}&title=${title}`,
    background: '#0a66c2',
    color: 'white',
    label: 'Share on LinkedIn',
    icon: '/icon/linkedin.svg'
  },
  {
    outlet: 'Facebook',
    href: `https://www.facebook.com/sharer.php?u=${link}`,
    background: '#3b5898',
    color: 'white',
    label: 'Share on Facebook',
    icon: '/icon/facebook.svg'
  },
  {
    outlet: 'Twitter',
    href: `https://twitter.com/intent/tweet?url=${link}&text=${title}`,
    background: '#00aced',
    color: 'white',
    label: 'Share on Twitter',
    icon: '/icon/twitter.svg'
  },
  {
    outlet: 'Email',
    href: `mailto:?subject=${title}&body=${link}${text}`,
    background: '#dd4b39',
    color: 'white',
    label: 'Share via Email',
    icon: '/icon/email.svg'
  },
  {
    outlet: 'SMS',
    href: `sms:?body=${link}`,
    background: '#7bcb20',
    color: 'white',
    label: 'Share via SMS',
    icon: '/icon/sms.svg'
  }
];
