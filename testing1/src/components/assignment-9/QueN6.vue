<template>
    <div>
        <b-card v-for="array in data" :key="array.id">
        <b-card-text>
            <p>name:{{array.name}}</p>
            <p>description:{{array.description}}</p>
        </b-card-text>
        </b-card>
    </div>
</template>
<script>
export default {
    name:"QueN6",
    data() {
        return{
                 data : [{ "name" :" Agile CRM" ,
                  "description" :" A company of excellence"},
                   {"name":"mantra technologies", "description":"500apps" },
                   {"name":"500apps Python", "description":"Backend built using python" },
                   {"name":"500apps infinity", "description":"Builtusing vue JS" }]
        }
    },
}
</script>
