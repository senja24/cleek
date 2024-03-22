import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo';
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const title = 'Cleek — Your own AI chat service';
const description = 'Cleek - AI infrastructure for everyone, extensible (Function Calling), high-performance chatbot framework. Get your own AI chat service with OpenAI & LLM web application.';

const siteConfig = {
  logo: Logo,
  seo: {
    title: title,
    description: description,
    openGraph: {
      description: description,
      images: [
        {
          alt: title,
          height: 360,
          url: 'https://res.cloudinary.com/dndxf5krb/image/upload/f_auto,q_auto/v1/file/assets/a8jj9neoqlfnrgbvvxqn',
          width: 480,
        },
        {
          alt: title,
          height: 720,
          url: 'https://res.cloudinary.com/dndxf5krb/image/upload/f_auto,q_auto/v1/file/assets/u9s04wkzyrfrav5lkzr0',
          width: 960,
        },
      ],
      locale: 'en-US',
      siteName: title,
      title: title,
      type: 'website',
    },
    twitter: {
      cardType: 'summary_large_image',
      site: '@ikaagussetiawan',
      handle: '@ikaagussetiawan',
    },
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'home',
        label: 'Home',
        href: '/',
      },
      {
        id: 'blog',
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'Try Now',
        href: 'https://app.cleek.id',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://cleek.id/">Cleek</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:support@cleek.id',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/ikaagussetiawan',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/senja24/cleek',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Cleek',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
