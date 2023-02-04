---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/nalanyinyun.jpg',
    name: 'Nalanyinyun',
    title: 'Developer,Maintainer,Website Developer',
    links: [
      { icon: 'github', link: 'https://github.com/naranyinyun' },
      { icon: 'youtube', link: 'https://space.bilibili.com/384920476' },
    ]
  },
  {
    avatar: '/RBQ.jpg',
    name: 'XiaHua',
    title: 'Developer,Maintainer',
    links: [
        { icon: 'youtube', link: 'https://space.bilibili.com/251529945' },
        { icon: 'github', link: 'https://github.com/XiaHuaBeiChiDiaoLe' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      About us
    </template>
    <template #lead>
      Developers
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
