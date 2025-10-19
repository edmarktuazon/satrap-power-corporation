| Function                 | Description                                                                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **`ref()`**              | Ginagamit para gumawa ng*reactive*variable. Halimbawa `const count = ref(0)`— kapag nagbago si `count.value`, magre-react si UI.          |
| **`reactive()`**         | Para gumawa ng*reactive object* . Halimbawa `const user = reactive({ name: 'Edmark' })`. Lahat ng property sa loob ay reactive.           |
| **`computed()`**         | Parang function na may automatic update. Example:`const double = computed(() => count.value * 2)`. Auto-update kapag nagbago ang `count`. |
| **`watch()`**            | Nakikinig sa pagbabago ng reactive data. Example:`watch(count, (newVal, oldVal) => console.log(newVal))`.                                 |
| **`watchEffect()`**      | Auto-run function na nagre-react sa lahat ng reactive data na ginagamit sa loob. Di mo kailangan i-specify alin ang i-watch.              |
| **`toRefs()`/`toRef()`** | Ginagamit para i-convert ang properties ng `reactive`object into individual refs (useful kapag gusto mo i-destructure).                   |
| **`readonly()`**         | Gumagawa ng version ng reactive object na hindi pwedeng baguhin. Useful para magbigay ng “safe” data sa components.                       |

| Function                  | Description                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **`onMounted()`**         | Tumatawag kapag fully na-render na ang component sa DOM. Karaniwang dito nilalagay ang API calls o DOM manipulation. |
| **`onBeforeMount()`**     | Tumatawag**bago**i-render sa DOM.                                                                                    |
| **`onUpdated()`**         | Tumatawag kapag nagbago ang data at na-update ulit ang DOM.                                                          |
| **`onBeforeUpdate()`**    | Tumatawag**bago**i-update ang DOM.                                                                                   |
| **`onUnmounted()`**       | Tumatawag kapag tatanggalin na ang component sa page (cleanup dito).                                                 |
| **`onBeforeUnmount()`**   | Tumatawag**bago**i-unmount (rarely used).                                                                            |
| **`onErrorCaptured()`**   | Kapag nagka-error ang child component, dito mo siya pwedeng i-handle.                                                |
| **`onRenderTracked()`**   | Debugging tool — ginagamit para makita kung kailan ni-track ng Vue ang reactive dependencies.                        |
| **`onRenderTriggered()`** | Debugging tool din — para makita kung bakit nag-trigger ang re-render.                                               |

| Function             | Description (Taglish)                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **`defineProps()`**  | Para i-define ang props ng component (sa `<script setup>`). Example:`const props = defineProps({ label: String })`. |
| **`defineEmits()`**  | Para mag-emit ng custom events. Example:`const emit = defineEmits(['submit'])`.                                     |
| **`defineExpose()`** | Ginagamit para ma-expose ang internal functions/data ng child component papunta sa parent.                          |
| **`defineSlots()`**  | (Optional) Para mag-describe ng slots sa `<script setup>`.                                                          |
| **`useSlots()`**     | Access sa slots data sa JS side.                                                                                    |
| **`useAttrs()`**     | Access sa lahat ng attributes na ipinasa sa component pero hindi naka-declare bilang props.                         |

| Function                   | Description                                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **`getCurrentInstance()`** | Kukunin ang kasalukuyang Vue component instance — ginagamit minsan para sa advanced logic (rarely used).            |
| **`nextTick()`**           | Ipapahintay si Vue matapos mag-update sa DOM bago magpatuloy. Useful sa mga UI changes. Example:`await nextTick()`. |

| Function            | Source     | Description                                  |
| ------------------- | ---------- | -------------------------------------------- |
| **`useRoute()`**    | Vue Router | Kukunin ang current route object.            |
| **`useRouter()`**   | Vue Router | Para mag-navigate o mag-control ng routes.   |
| **`storeToRefs()`** | Pinia      | Para ma-extract reactive data mula sa store. |
| **`useStore()`**    | Pinia      | Para mag-access ng Pinia store.              |
