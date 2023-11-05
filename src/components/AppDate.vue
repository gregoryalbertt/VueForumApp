<template>
        <span :title="humanFriendlyDate()">
          {{ diffForHumans() }}
        </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'

dayjs.extend(relativeTime)
dayjs.extend(localizedDate)
    export default {
        name: 'AppDate',
        props:
        {
            timestamp: {
                required: true,
                type: Number
            }
        },
        methods: {
            humanFriendlyDate(){
                return dayjs.unix(this.timestamp).format('llll')

            },
            diffForHumans(){
                return dayjs.unix(this.timestamp).fromNow()

            }
        }
    }
</script>

<style scoped>

</style>