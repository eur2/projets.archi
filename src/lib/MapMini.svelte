<script>
  let { post } = $props();

  import { setMap } from "$lib/useMapMini";
</script>

<div
  class="map z2"
  use:setMap={{
    post: post,
    zoom: 16,
  }}
></div>

<style>
  @import "leaflet/dist/leaflet.css";

  .map {
    height: 300px;
  }
</style>
