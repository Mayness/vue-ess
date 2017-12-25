<template>
  <div>
    <h2 class="contentBox_title">通知类</h2>
    <div class="contentBox_item">
      <Alert/>
      <Loading/>
      <Message/>
      <Box/>
      <Notifi/>
    </div>
  </div>
</template>

<script>
  import Alert from '@/components/notice/alert'
  import Loading from '@/components/notice/loading'
  import Message from '@/components/notice/message'
  import Box from '@/components/notice/box'
  import Notifi from '@/components/notice/notifi'
  export default {
    components: {Alert, Loading, Message, Box, Notifi}
  }
</script>