<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'ellipsoid-graphics',
  mixins: [entityGraphics],
  props: {
    heightReference: Number,
    radii: Object,
    show: {
      type: Boolean,
      default: true
    },
    fill: {
      type: Boolean,
      default: true
    },
    material: [Object, String],
    outline: {
      type: Boolean,
      default: false
    },
    outlineColor: Object,
    outlineWidth: {
      type: Number,
      default: 1.0
    },
    subdivisions: {
      type: Number,
      default: 128
    },
    stackPartitions: {
      type: Number,
      default: 64
    },
    slicePartitions: {
      type: Number,
      default: 64
    },
    shadows: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: Object
  },
  watch: {
    heightReference (val) {
      this.graphics.heightReference = val
    },
    radii (val) {
      this.graphics.radii = val
    },
    show (val) {
      this.graphics.show = val
    },
    fill (val) {
      this.graphics.fill = val
    },
    material (val) {
      this.graphics.material = val
    },
    outline (val) {
      this.graphics.outline = val
    },
    outlineColor (val) {
      this.graphics.outlineColor = val
    },
    outlineWidth (val) {
      this.graphics.outlineWidth = val
    },
    subdivisions (val) {
      this.graphics.subdivisions = val
    },
    stackPartitions (val) {
      this.graphics.stackPartitions = val
    },
    slicePartitions (val) {
      this.graphics.slicePartitions = val
    },
    shadows (val) {
      this.graphics.shadows = val
    },
    distanceDisplayCondition (val) {
      this.graphics.distanceDisplayCondition = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, heightReference, radii, show, fill, material, outline, outlineColor, outlineWidth, subdivisions,
        stackPartitions, slicePartitions, shadows, distanceDisplayCondition } = this
      let options = {
        heightReference,
        radii,
        show,
        fill,
        material,
        outline,
        outlineColor,
        outlineWidth,
        subdivisions,
        stackPartitions,
        slicePartitions,
        shadows,
        distanceDisplayCondition
      }
      this.removeNullItem(options)
      let ellipsoid = new Cesium.EllipsoidGraphics(options)

      return ellipsoid
    }
  }
}
</script>
