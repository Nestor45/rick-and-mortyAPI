<template>
    <section>
        <div class="row">
            <div v-for="character in characters" :key="character.id">
                <div class="col s6 m4">
                    <CardCharacter :character="character" />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import CardCharacter from './CardCharacter.vue'
export default {
    components: {
        CardCharacter
    },
    setup() {
        const store = useStore()
        const characters = computed(() => {
            return store.state.charactersFilter
        })
        onMounted(() => {
            store.dispatch('getCharacters')
        })
        return {
            characters
        }
    },
}
</script>
