/**
 *@description: Plugin of ArcGis-Lerc tile geometry loader
 *@author: 郭江峰
 *@date: 2023-04-05
 */

import { TileMap } from "../../map";
import { TileGeometryLercLoader } from "./TileGeometryLercLoader";

/** ArcGis LERC 格式地形图插件 */
// class LercPlugin extends BasePlugin {
// 	public name = "lerc";
// 	public author = "GuoJF";
// 	public description = "ArcGis-Lerc tile geometry loader";
// 	protected doInstall(): void {
// 		// 加载 LERC 格式数据解析wasm
// 		Lerc.load({
// 			locateFile: () => decodeUrl,
// 		});
// 		// 注册LERC格式数据加载器
// 		LoaderFactory.registerGeometryLoader(new TileGeometryLercLoader());
// 	}
// }

// // 导出插件
// export const lerc = new LercPlugin();

// 加载 LERC 格式数据解析wasm
// (async () =>
// 	await Lerc.load({
// 		locateFile: () => decodeUrl,
// 	}))();

TileMap.registerDEMloader(new TileGeometryLercLoader());
