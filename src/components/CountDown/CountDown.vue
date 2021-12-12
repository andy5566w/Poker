<template>
  <div>還剩{{ data.days }}天{{ data.hours }}:{{ data.mins }}:{{ data.seconds }}</div>
</template>

<script setup>
import { onMounted, defineProps, defineEmits } from "@vue/runtime-core";
import { reactive, computed } from "@vue/reactivity";
const props = defineProps({
  time: {
    type: [String, Number],
    require: true,
  },
  isMillionSecond: {
    type: Boolean,
    required: true,
  },
});
const data = reactive({
  days: "0",
  hours: "00",
  mins: "00",
  seconds: "00",
  timer: null,
  currentTime: Date.now(),
});

const duration = computed(() => {
  return props.isMillionSecond ? Math.round(+props.time / 1000) : Math.round(+props.time)
}
)


const durationFormatter = (time) => {
  if (!time) return { ss: 0 };
  let t = time;
  const ss = t % 60;
  t = (t - ss) / 60;
  if (t < 1) return { ss };
  const mm = t % 60;
  t = (t - mm) / 60;
  if (t < 1) return { mm, ss };
  const hh = t % 24;
  t = (t - hh) / 24;
  if (t < 1) return { hh, mm, ss };
  const dd = t;
  return { dd, hh, mm, ss };
}
const getTime = (duration) => {
  props.timer && clearTimeout(props.timer);
  if (duration < 0) {
    alert('time up')
    return;
  }
  const { dd, hh, mm, ss } = durationFormatter(duration);
  data.days = dd || 0;
  data.hours = hh || 0;
  data.mins = mm || 0;
  data.seconds = ss || 0;
  data.timer = setTimeout(() => {
    const now = Date.now()
    const diff = Math.round((now - data.currentTime) / 1000)
    data.currentTime = now
    getTime(duration - diff);
  }, 1000);
}
const countDown = () => {
  getTime(duration.value)
}
countDown()


</script>

    <style lang="scss" scoped>
</style>