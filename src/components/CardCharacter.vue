<template>
    <div class="card z-depth-2">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" :src="character.image " :alt="character.name">
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{{character.name}}<i class="material-icons right">more_vert</i></span>
            <div class="status">
                <span
                    :class="
                        character.status == 'Alive' ? 'alive' :
                        character.status == 'Dead' ? 'dead' :
                        'default'
                    "
                ></span>
                <label >
                    <span >{{character.status}}-{{character.species}}</span>
                </label>
            </div>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
            <div class="origin">
                <span class="card-title grey-text text-darken-4">
                    Origin:
                    {{character.origin.name}}
                </span>
            </div>
            <div class="location">
                <span class="card-title grey-text text-darken-4">
                    Location:
                    {{character.location.name}}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['character']
} 
</script>
