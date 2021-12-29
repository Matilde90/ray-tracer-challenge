import { Projectile, Environment, Point, Vector } from "./types/types";
import { normaliseVector, sumTuple } from "./features/tuples"

const tick = (env: Environment, proj: Projectile): Projectile => {
  const position = sumTuple(proj.position, proj.velocity)
  const sumGravityWind = sumTuple(env.gravity, env.wind)
  if (sumGravityWind instanceof Error || position instanceof Error) {
    throw new Error
  }
  const velocity = sumTuple(sumGravityWind, proj.velocity)
  if (velocity instanceof Error) {
    throw new Error
  }
  return new Projectile(position, velocity)
}

// initialise point that starts one unit above the origin.
// velocity is normalised to 1 unit/tick
const p = new Projectile(new Point(0, 1, 0), normaliseVector(new Vector(1, 1, 0)))
const e = new Environment(new Vector(0, -0.1, 0), new Vector(-0.01, 0, 0))

let tickCount: number = 0
export const recursiveRunTick = (env: Environment, proj: Projectile): string => {
  const projectilePosition = tick(env, proj)
  tickCount++
  console.log(projectilePosition)
  console.log(tickCount)
  return projectilePosition.position.y > 0 ? recursiveRunTick(env, projectilePosition) : "done"
}

recursiveRunTick(e, p)