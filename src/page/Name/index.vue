<template>
    <div>
        <h1>Name Page</h1>
        <p>Dynamic Path: {{ $route.params.name }}</p>
        <p>Query Params: {{ $route.query }}</p>
    </div>
</template>

<script>
import './name.scss';

export default {
    name: 'Name',
};
</script>
