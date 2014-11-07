//constructor
var Particle = function(x, y, angle, speed, life, size) {

    /* the particle location*/
    //position vector
    this.pos = {
        x: x || 0,
        y: y || 0
    }; // end of pos

    /* set specified defaults */
    this.speed = speed || 5;
    this.life = life || 1;
    this.size = size || 2;
    this.lived = 0;

    /*the particles's velocity */
    var radians = angle * Math.PI / 180;
    this.vel = {
        x: Math.cos(radians) * speed,
        //negative because Y axis increases from the top
        y: -Math.sin(radians) * speed
    }; // end of radians
}; // end of particle

var settings = {
    'basic': {
        //amount of particles that the emmitter will emit every second
        'emission_rate': 50,
        'min_life': 3,
        'life_range': 2,
        'min_angle': 0,
        'angle_range': 360,
        'min_speed': 25,
        'speed_range': 15,
        'min_size': 3,
        'size_range': 2,
        'colour': '#82c4f5'
    } //end of basics
}; //end of settings

var Emitter = function(x, y, settings) {
    // the emitter's possition 
    this.pos = {
        x: x,
        y: y,
    }; //end of pos

    //set specified values
    this.settings = settings;

    //How often the emitter needs to create a particle in miliseconds
    this.emission_delay = 1000 / settings.emission_rate;

    this.last_update = 0;
    this.last_emission = 0;

    //the emitter's particle objects
    this.particles = [];
}; // end of emitter


Emitter.prototype.update = function() {
    /* set the last_update variable to now if it's the first update */
    if (!this.last_update) {
        this.last_update = Date.now();
        return;
    }

    /* get the current time */
    var time = Date.now();

    /* work out the milliseconds since the last update */
    var dt = time - this.last_update;

    /* add them to the milliseconds since the last particle emission */
    this.last_emission += dt;

    /* set last_update to now */
    this.last_update = time;

    /* check if we need to emit a new particle */
    if (this.last_emission > this.emission_delay) {
        /* find out how many particles we need to emit */
        var i = Math.floor(this.last_emission / this.emission_delay);

        /* subtract the appropriate amount of milliseconds from last_emission */
        this.last_emission -= i * this.emission_delay;

        while (i--) {
            /* calculate the particle's properties based on the emitter's settings */
        }
    }

    /* loop through the existing particles */
    var i = this.particles.length;

    while (i--) {

        /* check the particle's life status */

        /* calculate the particle's new position based on the seconds passed */

        /* draw the particle */
    }
};