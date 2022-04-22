"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveRunTick = void 0;
const types_1 = require("./types/types");
const tuples_1 = require("./features/tuples");
const tick = (env, proj) => {
    const position = (0, tuples_1.sumTuple)(proj.position, proj.velocity);
    const sumGravityWind = (0, tuples_1.sumTuple)(env.gravity, env.wind);
    if (sumGravityWind instanceof Error || position instanceof Error) {
        throw new Error;
    }
    const velocity = (0, tuples_1.sumTuple)(sumGravityWind, proj.velocity);
    if (velocity instanceof Error) {
        throw new Error;
    }
    return new types_1.Projectile(position, velocity);
};
// initialise point that starts one unit above the origin.
// velocity is normalised to 1 unit/tick
const p = new types_1.Projectile(new types_1.Point(0, 1, 0), (0, tuples_1.normaliseVector)(new types_1.Vector(1, 1, 0)));
const e = new types_1.Environment(new types_1.Vector(0, -0.1, 0), new types_1.Vector(-0.01, 0, 0));
let tickCount = 0;
const recursiveRunTick = (env, proj) => {
    const projectilePosition = tick(env, proj);
    tickCount++;
    console.log(projectilePosition);
    console.log(tickCount);
    return projectilePosition.position.y > 0 ? (0, exports.recursiveRunTick)(env, projectilePosition) : "done";
};
exports.recursiveRunTick = recursiveRunTick;
// recursiveRunTick(e, p)
