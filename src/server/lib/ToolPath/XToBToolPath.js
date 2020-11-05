import ToolPath from './index';
import { round } from '../../../shared/lib/utils';

class XToBToolPath extends ToolPath {
    constructor(options = {}) {
        super(options);
    }

    move0X(x, f) {
        if (this.isRotate) {
            super.move0B(this.toB(x), f);
        } else {
            super.move0X(x, f);
        }
    }

    move0XY(x, y, f) {
        if (this.isRotate) {
            super.move0BY(this.toB(x), y, f);
        } else {
            super.move0XY(x, y, f);
        }
    }

    move1X(x, f) {
        if (this.isRotate) {
            super.move1B(this.toB(x), f);
        } else {
            super.move1X(x, f);
        }
    }

    move1XY(x, y, f) {
        if (this.isRotate) {
            super.move1BY(this.toB(x), y, f);
        } else {
            super.move1XY(x, y, f);
        }
    }

    move1XZ(x, z, f) {
        if (this.isRotate) {
            super.move1BZ(this.toB(x), z, f);
        } else {
            super.move1XZ(x, z, f);
        }
    }

    toB(x) {
        const b = x / this.diameter / Math.PI * 360;
        return round(b, 2);
    }

    safeStart(x, y, stopHeight, safetyHeight, jogSpeed) {
        this.commands.push({ G: 90 });
        this.commands.push({ G: 0, Z: stopHeight, F: jogSpeed });
        this.move0XY(x, y, jogSpeed);
        this.commands.push({ G: 0, Z: safetyHeight, F: jogSpeed });
    }
}

export default XToBToolPath;
