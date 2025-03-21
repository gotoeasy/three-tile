import { Camera, Vector2, Vector3 } from "three";
import { TileMap } from "../../map";

export function getLocalFromMouse(pointerEvent: PointerEvent, map: TileMap, camera: Camera): Vector3 | undefined {
	const { currentTarget: target, clientX: x, clientY: y } = pointerEvent;
	if (target instanceof HTMLElement) {
		const width = target.clientWidth;
		const height = target.clientHeight;
		const pointer = new Vector2((x / width) * 2 - 1, -(y / height) * 2 + 1);
		const info = map.getLocalInfoFromScreen(camera, pointer);
		return info?.location;
	} else {
		return undefined;
	}
}
