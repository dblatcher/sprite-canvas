
/** 
 * Appends the `filter` to the current value of `ctx.filter`, runs the `operation` then 
 * resets `ctx.filter` to its previous value.
 * 
 * Useful for 'layering' filters within a drawing operation, or applying a filter without
 * affecting the next operation
*/
export const withFilter = (ctx: CanvasRenderingContext2D) => (filter: string, operation: { (): void }) => {
    const oldFilter = ctx.filter;
    const newFilter = oldFilter === 'none' ? filter : [oldFilter, filter].join(" ")
    ctx.filter = newFilter;
    operation()
    ctx.filter = oldFilter
}
