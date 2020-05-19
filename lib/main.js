(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["acc-engine.js"] = factory();
	else
		root["acc-engine.js"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdateacc_engine_js"];
/******/ 	this["webpackHotUpdateacc_engine_js"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "dfbb4e7dfb657d4700e3";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/index.js")(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classPrivateFieldBase(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }

  return receiver;
}

module.exports = _classPrivateFieldBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;

function _classPrivateFieldKey(name) {
  return "__private_" + id++ + "_" + name;
}

module.exports = _classPrivateFieldKey;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/newArrowCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/newArrowCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

module.exports = _newArrowCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@zoranwong/pure-container/lib/main.js":
/*!************************************************************!*\
  !*** ./node_modules/@zoranwong/pure-container/lib/main.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,e){ true?module.exports=e():undefined}(this,(function(){return function(n){var e=this.webpackHotUpdatepure_container;this.webpackHotUpdatepure_container=function(n,t){!function(n,e){if(!_[n]||!j[n])return;for(var t in j[n]=!1,e)Object.prototype.hasOwnProperty.call(e,t)&&(h[t]=e[t]);0==--b&&0===m&&k()}(n,t),e&&e(n,t)};var t,r=!0,u="2f13237fd3a9347b7325",o={},i=[],c=[];function a(n){var e=S[n];if(!e)return M;var r=function(r){return e.hot.active?(S[r]?-1===S[r].parents.indexOf(n)&&S[r].parents.push(n):(i=[n],t=r),-1===e.children.indexOf(r)&&e.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+n),i=[]),M(r)},u=function(n){return{configurable:!0,enumerable:!0,get:function(){return M[n]},set:function(e){M[n]=e}}};for(var o in M)Object.prototype.hasOwnProperty.call(M,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,u(o));return r.e=function(n){return"ready"===s&&d("prepare"),m++,M.e(n).then(e,(function(n){throw e(),n}));function e(){m--,"prepare"===s&&(g[n]||O(n),0===m&&0===b&&k())}},r.t=function(n,e){return 1&e&&(n=r(n)),M.t(n,-2&e)},r}function f(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(n,e){if(void 0===n)r._selfAccepted=!0;else if("function"==typeof n)r._selfAccepted=n;else if("object"==typeof n)for(var t=0;t<n.length;t++)r._acceptedDependencies[n[t]]=e||function(){};else r._acceptedDependencies[n]=e||function(){}},decline:function(n){if(void 0===n)r._selfDeclined=!0;else if("object"==typeof n)for(var e=0;e<n.length;e++)r._declinedDependencies[n[e]]=!0;else r._declinedDependencies[n]=!0},dispose:function(n){r._disposeHandlers.push(n)},addDisposeHandler:function(n){r._disposeHandlers.push(n)},removeDisposeHandler:function(n){var e=r._disposeHandlers.indexOf(n);e>=0&&r._disposeHandlers.splice(e,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":(h={})[e]=n[e],d("ready");break;case"ready":E(e);break;case"prepare":case"check":case"dispose":case"apply":(y=y||[]).push(e)}},check:x,apply:A,status:function(n){if(!n)return s;l.push(n)},addStatusHandler:function(n){l.push(n)},removeStatusHandler:function(n){var e=l.indexOf(n);e>=0&&l.splice(e,1)},data:o[e]};return t=void 0,r}var l=[],s="idle";function d(n){s=n;for(var e=0;e<l.length;e++)l[e].call(null,n)}var p,h,v,y,b=0,m=0,g={},j={},_={};function w(n){return+n+""===n?+n:n}function x(n){if("idle"!==s)throw new Error("check() is only allowed in idle status");return r=n,d("check"),(e=1e4,e=e||1e4,new Promise((function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=M.p+""+u+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(n){return t(n)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(n){return void t(n)}n(e)}}}))).then((function(n){if(!n)return d(P()?"ready":"idle"),null;j={},g={},_=n.c,v=n.h,d("prepare");var e=new Promise((function(n,e){p={resolve:n,reject:e}}));h={};return O(0),"prepare"===s&&0===m&&0===b&&k(),e}));var e}function O(n){_[n]?(j[n]=!0,b++,function(n){var e=document.createElement("script");e.charset="utf-8",e.src=M.p+""+n+"."+u+".hot-update.js",document.head.appendChild(e)}(n)):g[n]=!0}function k(){d("ready");var n=p;if(p=null,n)if(r)Promise.resolve().then((function(){return A(r)})).then((function(e){n.resolve(e)}),(function(e){n.reject(e)}));else{var e=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&e.push(w(t));n.resolve(e)}}function A(e){if("ready"!==s)throw new Error("apply() is only allowed in ready status");return function e(r){var c,a,f,l,s;function p(n){for(var e=[n],t={},r=e.map((function(n){return{chain:[n],id:n}}));r.length>0;){var u=r.pop(),o=u.id,i=u.chain;if((l=S[o])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var c=0;c<l.parents.length;c++){var a=l.parents[c],f=S[a];if(f){if(f.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([a]),moduleId:o,parentId:a};-1===e.indexOf(a)&&(f.hot._acceptedDependencies[o]?(t[a]||(t[a]=[]),b(t[a],[o])):(delete t[a],e.push(a),r.push({chain:i.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:n,outdatedModules:e,outdatedDependencies:t}}function b(n,e){for(var t=0;t<e.length;t++){var r=e[t];-1===n.indexOf(r)&&n.push(r)}}P();var m={},g=[],j={},x=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var O in h)if(Object.prototype.hasOwnProperty.call(h,O)){var k;s=w(O),k=h[O]?p(s):{type:"disposed",moduleId:O};var A=!1,E=!1,D=!1,I="";switch(k.chain&&(I="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":r.onDeclined&&r.onDeclined(k),r.ignoreDeclined||(A=new Error("Aborted because of self decline: "+k.moduleId+I));break;case"declined":r.onDeclined&&r.onDeclined(k),r.ignoreDeclined||(A=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+I));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(k),r.ignoreUnaccepted||(A=new Error("Aborted because "+s+" is not accepted"+I));break;case"accepted":r.onAccepted&&r.onAccepted(k),E=!0;break;case"disposed":r.onDisposed&&r.onDisposed(k),D=!0;break;default:throw new Error("Unexception type "+k.type)}if(A)return d("abort"),Promise.reject(A);if(E)for(s in j[s]=h[s],b(g,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,s)&&(m[s]||(m[s]=[]),b(m[s],k.outdatedDependencies[s]));D&&(b(g,[k.moduleId]),j[s]=x)}var R,C=[];for(a=0;a<g.length;a++)s=g[a],S[s]&&S[s].hot._selfAccepted&&j[s]!==x&&!S[s].hot._selfInvalidated&&C.push({module:s,parents:S[s].parents.slice(),errorHandler:S[s].hot._selfAccepted});d("dispose"),Object.keys(_).forEach((function(n){!1===_[n]&&function(n){delete installedChunks[n]}(n)}));var T,H,B=g.slice();for(;B.length>0;)if(s=B.pop(),l=S[s]){var F={},N=l.hot._disposeHandlers;for(f=0;f<N.length;f++)(c=N[f])(F);for(o[s]=F,l.hot.active=!1,delete S[s],delete m[s],f=0;f<l.children.length;f++){var q=S[l.children[f]];q&&((R=q.parents.indexOf(s))>=0&&q.parents.splice(R,1))}}for(s in m)if(Object.prototype.hasOwnProperty.call(m,s)&&(l=S[s]))for(H=m[s],f=0;f<H.length;f++)T=H[f],(R=l.children.indexOf(T))>=0&&l.children.splice(R,1);d("apply"),void 0!==v&&(u=v,v=void 0);for(s in h=void 0,j)Object.prototype.hasOwnProperty.call(j,s)&&(n[s]=j[s]);var L=null;for(s in m)if(Object.prototype.hasOwnProperty.call(m,s)&&(l=S[s])){H=m[s];var U=[];for(a=0;a<H.length;a++)if(T=H[a],c=l.hot._acceptedDependencies[T]){if(-1!==U.indexOf(c))continue;U.push(c)}for(a=0;a<U.length;a++){c=U[a];try{c(H)}catch(n){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:s,dependencyId:H[a],error:n}),r.ignoreErrored||L||(L=n)}}}for(a=0;a<C.length;a++){var z=C[a];s=z.module,i=z.parents,t=s;try{M(s)}catch(n){if("function"==typeof z.errorHandler)try{z.errorHandler(n)}catch(e){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:e,originalError:n}),r.ignoreErrored||L||(L=e),L||(L=n)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:s,error:n}),r.ignoreErrored||L||(L=n)}}if(L)return d("fail"),Promise.reject(L);if(y)return e(r).then((function(n){return g.forEach((function(e){n.indexOf(e)<0&&n.push(e)})),n}));return d("idle"),new Promise((function(n){n(g)}))}(e=e||{})}function P(){if(y)return h||(h={}),y.forEach(E),y=void 0,!0}function E(e){Object.prototype.hasOwnProperty.call(h,e)||(h[e]=n[e])}var S={};function M(e){if(S[e])return S[e].exports;var t=S[e]={i:e,l:!1,exports:{},hot:f(e),parents:(c=i,i=[],c),children:[]};return n[e].call(t.exports,t,t.exports,a(e)),t.l=!0,t.exports}return M.m=n,M.c=S,M.d=function(n,e,t){M.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},M.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},M.t=function(n,e){if(1&e&&(n=M(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(M.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)M.d(t,r,function(e){return n[e]}.bind(null,r));return t},M.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return M.d(e,"a",e),e},M.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},M.p="",M.h=function(){return u},a("./src/Container.js")(M.s="./src/Container.js")}({"./node_modules/@babel/runtime/helpers/assertThisInitialized.js":function(n,e){n.exports=function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}},"./node_modules/@babel/runtime/helpers/classCallCheck.js":function(n,e){n.exports=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},"./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js":function(n,e){n.exports=function(n,e){if(!Object.prototype.hasOwnProperty.call(n,e))throw new TypeError("attempted to use private field on non-instance");return n}},"./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js":function(n,e){var t=0;n.exports=function(n){return"__private_"+t+++"_"+n}},"./node_modules/@babel/runtime/helpers/construct.js":function(n,e,t){var r=t("./node_modules/@babel/runtime/helpers/setPrototypeOf.js"),u=t("./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");function o(e,t,i){return u()?n.exports=o=Reflect.construct:n.exports=o=function(n,e,t){var u=[null];u.push.apply(u,e);var o=new(Function.bind.apply(n,u));return t&&r(o,t.prototype),o},o.apply(null,arguments)}n.exports=o},"./node_modules/@babel/runtime/helpers/createClass.js":function(n,e){function t(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}n.exports=function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}},"./node_modules/@babel/runtime/helpers/getPrototypeOf.js":function(n,e){function t(e){return n.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},t(e)}n.exports=t},"./node_modules/@babel/runtime/helpers/inherits.js":function(n,e,t){var r=t("./node_modules/@babel/runtime/helpers/setPrototypeOf.js");n.exports=function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&r(n,e)}},"./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":function(n,e){n.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}},"./node_modules/@babel/runtime/helpers/newArrowCheck.js":function(n,e){n.exports=function(n,e){if(n!==e)throw new TypeError("Cannot instantiate an arrow function")}},"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":function(n,e,t){var r=t("./node_modules/@babel/runtime/helpers/typeof.js"),u=t("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");n.exports=function(n,e){return!e||"object"!==r(e)&&"function"!=typeof e?u(n):e}},"./node_modules/@babel/runtime/helpers/setPrototypeOf.js":function(n,e){function t(e,r){return n.exports=t=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},t(e,r)}n.exports=t},"./node_modules/@babel/runtime/helpers/typeof.js":function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=t=function(n){return typeof n}:n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(e)}n.exports=t},"./node_modules/underscore/modules/index.js":function(n,e,t){"use strict";t.r(e),function(n){t.d(e,"default",(function(){return b})),t.d(e,"VERSION",(function(){return m})),t.d(e,"iteratee",(function(){return _})),t.d(e,"restArguments",(function(){return x})),t.d(e,"each",(function(){return D})),t.d(e,"forEach",(function(){return D})),t.d(e,"map",(function(){return I})),t.d(e,"collect",(function(){return I})),t.d(e,"reduce",(function(){return C})),t.d(e,"foldl",(function(){return C})),t.d(e,"inject",(function(){return C})),t.d(e,"reduceRight",(function(){return T})),t.d(e,"foldr",(function(){return T})),t.d(e,"find",(function(){return H})),t.d(e,"detect",(function(){return H})),t.d(e,"filter",(function(){return B})),t.d(e,"select",(function(){return B})),t.d(e,"reject",(function(){return F})),t.d(e,"every",(function(){return N})),t.d(e,"all",(function(){return N})),t.d(e,"some",(function(){return q})),t.d(e,"any",(function(){return q})),t.d(e,"contains",(function(){return L})),t.d(e,"includes",(function(){return L})),t.d(e,"include",(function(){return L})),t.d(e,"invoke",(function(){return U})),t.d(e,"pluck",(function(){return z})),t.d(e,"where",(function(){return W})),t.d(e,"findWhere",(function(){return K})),t.d(e,"max",(function(){return J})),t.d(e,"min",(function(){return V})),t.d(e,"shuffle",(function(){return X})),t.d(e,"sample",(function(){return G})),t.d(e,"sortBy",(function(){return $})),t.d(e,"groupBy",(function(){return Y})),t.d(e,"indexBy",(function(){return Z})),t.d(e,"countBy",(function(){return nn})),t.d(e,"toArray",(function(){return tn})),t.d(e,"size",(function(){return rn})),t.d(e,"partition",(function(){return un})),t.d(e,"first",(function(){return on})),t.d(e,"head",(function(){return on})),t.d(e,"take",(function(){return on})),t.d(e,"initial",(function(){return cn})),t.d(e,"last",(function(){return an})),t.d(e,"rest",(function(){return fn})),t.d(e,"tail",(function(){return fn})),t.d(e,"drop",(function(){return fn})),t.d(e,"compact",(function(){return ln})),t.d(e,"flatten",(function(){return dn})),t.d(e,"without",(function(){return pn})),t.d(e,"uniq",(function(){return hn})),t.d(e,"unique",(function(){return hn})),t.d(e,"union",(function(){return vn})),t.d(e,"intersection",(function(){return yn})),t.d(e,"difference",(function(){return bn})),t.d(e,"unzip",(function(){return mn})),t.d(e,"zip",(function(){return gn})),t.d(e,"object",(function(){return jn})),t.d(e,"findIndex",(function(){return wn})),t.d(e,"findLastIndex",(function(){return xn})),t.d(e,"sortedIndex",(function(){return On})),t.d(e,"indexOf",(function(){return An})),t.d(e,"lastIndexOf",(function(){return Pn})),t.d(e,"range",(function(){return En})),t.d(e,"chunk",(function(){return Sn})),t.d(e,"bind",(function(){return Dn})),t.d(e,"partial",(function(){return In})),t.d(e,"bindAll",(function(){return Rn})),t.d(e,"memoize",(function(){return Cn})),t.d(e,"delay",(function(){return Tn})),t.d(e,"defer",(function(){return Hn})),t.d(e,"throttle",(function(){return Bn})),t.d(e,"debounce",(function(){return Fn})),t.d(e,"wrap",(function(){return Nn})),t.d(e,"negate",(function(){return qn})),t.d(e,"compose",(function(){return Ln})),t.d(e,"after",(function(){return Un})),t.d(e,"before",(function(){return zn})),t.d(e,"once",(function(){return Wn})),t.d(e,"keys",(function(){return Xn})),t.d(e,"allKeys",(function(){return Gn})),t.d(e,"values",(function(){return $n})),t.d(e,"mapObject",(function(){return Qn})),t.d(e,"pairs",(function(){return Yn})),t.d(e,"invert",(function(){return Zn})),t.d(e,"functions",(function(){return ne})),t.d(e,"methods",(function(){return ne})),t.d(e,"extend",(function(){return te})),t.d(e,"extendOwn",(function(){return re})),t.d(e,"assign",(function(){return re})),t.d(e,"findKey",(function(){return ue})),t.d(e,"pick",(function(){return ie})),t.d(e,"omit",(function(){return ce})),t.d(e,"defaults",(function(){return ae})),t.d(e,"create",(function(){return fe})),t.d(e,"clone",(function(){return le})),t.d(e,"tap",(function(){return se})),t.d(e,"isMatch",(function(){return de})),t.d(e,"isEqual",(function(){return he})),t.d(e,"isEmpty",(function(){return ve})),t.d(e,"isElement",(function(){return ye})),t.d(e,"isArray",(function(){return me})),t.d(e,"isObject",(function(){return ge})),t.d(e,"isArguments",(function(){return je})),t.d(e,"isFunction",(function(){return _e})),t.d(e,"isString",(function(){return we})),t.d(e,"isNumber",(function(){return xe})),t.d(e,"isDate",(function(){return Oe})),t.d(e,"isRegExp",(function(){return ke})),t.d(e,"isError",(function(){return Ae})),t.d(e,"isSymbol",(function(){return Pe})),t.d(e,"isMap",(function(){return Ee})),t.d(e,"isWeakMap",(function(){return Se})),t.d(e,"isSet",(function(){return Me})),t.d(e,"isWeakSet",(function(){return De})),t.d(e,"isFinite",(function(){return Re})),t.d(e,"isNaN",(function(){return Ce})),t.d(e,"isBoolean",(function(){return Te})),t.d(e,"isNull",(function(){return He})),t.d(e,"isUndefined",(function(){return Be})),t.d(e,"has",(function(){return Fe})),t.d(e,"identity",(function(){return Ne})),t.d(e,"constant",(function(){return qe})),t.d(e,"noop",(function(){return Le})),t.d(e,"property",(function(){return Ue})),t.d(e,"propertyOf",(function(){return ze})),t.d(e,"matcher",(function(){return We})),t.d(e,"matches",(function(){return We})),t.d(e,"times",(function(){return Ke})),t.d(e,"random",(function(){return Je})),t.d(e,"now",(function(){return Ve})),t.d(e,"escape",(function(){return Qe})),t.d(e,"unescape",(function(){return Ye})),t.d(e,"result",(function(){return Ze})),t.d(e,"uniqueId",(function(){return et})),t.d(e,"templateSettings",(function(){return tt})),t.d(e,"template",(function(){return ct})),t.d(e,"chain",(function(){return at})),t.d(e,"mixin",(function(){return lt}));var r="object"==typeof self&&self.self===self&&self||"object"==typeof n&&n.global===n&&n||Function("return this")()||{},u=Array.prototype,o=Object.prototype,i="undefined"!=typeof Symbol?Symbol.prototype:null,c=u.push,a=u.slice,f=o.toString,l=o.hasOwnProperty,s=Array.isArray,d=Object.keys,p=Object.create,h=r.isNaN,v=r.isFinite,y=function(){};function b(n){return n instanceof b?n:this instanceof b?void(this._wrapped=n):new b(n)}var m=b.VERSION="1.10.2";function g(n,e,t){if(void 0===e)return n;switch(null==t?3:t){case 1:return function(t){return n.call(e,t)};case 3:return function(t,r,u){return n.call(e,t,r,u)};case 4:return function(t,r,u,o){return n.call(e,t,r,u,o)}}return function(){return n.apply(e,arguments)}}function j(n,e,t){return null==n?Ne:_e(n)?g(n,e,t):ge(n)&&!me(n)?We(n):Ue(n)}function _(n,e){return j(n,e,1/0)}function w(n,e,t){return b.iteratee!==_?b.iteratee(n,e):j(n,e,t)}function x(n,e){return e=null==e?n.length-1:+e,function(){for(var t=Math.max(arguments.length-e,0),r=Array(t),u=0;u<t;u++)r[u]=arguments[u+e];switch(e){case 0:return n.call(this,r);case 1:return n.call(this,arguments[0],r);case 2:return n.call(this,arguments[0],arguments[1],r)}var o=Array(e+1);for(u=0;u<e;u++)o[u]=arguments[u];return o[e]=r,n.apply(this,o)}}function O(n){if(!ge(n))return{};if(p)return p(n);y.prototype=n;var e=new y;return y.prototype=null,e}function k(n){return function(e){return null==e?void 0:e[n]}}function A(n,e){return null!=n&&l.call(n,e)}function P(n,e){for(var t=e.length,r=0;r<t;r++){if(null==n)return;n=n[e[r]]}return t?n:void 0}b.iteratee=_;var E=Math.pow(2,53)-1,S=k("length");function M(n){var e=S(n);return"number"==typeof e&&e>=0&&e<=E}function D(n,e,t){var r,u;if(e=g(e,t),M(n))for(r=0,u=n.length;r<u;r++)e(n[r],r,n);else{var o=Xn(n);for(r=0,u=o.length;r<u;r++)e(n[o[r]],o[r],n)}return n}function I(n,e,t){e=w(e,t);for(var r=!M(n)&&Xn(n),u=(r||n).length,o=Array(u),i=0;i<u;i++){var c=r?r[i]:i;o[i]=e(n[c],c,n)}return o}function R(n){var e=function(e,t,r,u){var o=!M(e)&&Xn(e),i=(o||e).length,c=n>0?0:i-1;for(u||(r=e[o?o[c]:c],c+=n);c>=0&&c<i;c+=n){var a=o?o[c]:c;r=t(r,e[a],a,e)}return r};return function(n,t,r,u){var o=arguments.length>=3;return e(n,g(t,u,4),r,o)}}var C=R(1),T=R(-1);function H(n,e,t){var r=(M(n)?wn:ue)(n,e,t);if(void 0!==r&&-1!==r)return n[r]}function B(n,e,t){var r=[];return e=w(e,t),D(n,(function(n,t,u){e(n,t,u)&&r.push(n)})),r}function F(n,e,t){return B(n,qn(w(e)),t)}function N(n,e,t){e=w(e,t);for(var r=!M(n)&&Xn(n),u=(r||n).length,o=0;o<u;o++){var i=r?r[o]:o;if(!e(n[i],i,n))return!1}return!0}function q(n,e,t){e=w(e,t);for(var r=!M(n)&&Xn(n),u=(r||n).length,o=0;o<u;o++){var i=r?r[o]:o;if(e(n[i],i,n))return!0}return!1}function L(n,e,t,r){return M(n)||(n=$n(n)),("number"!=typeof t||r)&&(t=0),An(n,e,t)>=0}var U=x((function(n,e,t){var r,u;return _e(e)?u=e:me(e)&&(r=e.slice(0,-1),e=e[e.length-1]),I(n,(function(n){var o=u;if(!o){if(r&&r.length&&(n=P(n,r)),null==n)return;o=n[e]}return null==o?o:o.apply(n,t)}))}));function z(n,e){return I(n,Ue(e))}function W(n,e){return B(n,We(e))}function K(n,e){return H(n,We(e))}function J(n,e,t){var r,u,o=-1/0,i=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var c=0,a=(n=M(n)?n:$n(n)).length;c<a;c++)null!=(r=n[c])&&r>o&&(o=r);else e=w(e,t),D(n,(function(n,t,r){((u=e(n,t,r))>i||u===-1/0&&o===-1/0)&&(o=n,i=u)}));return o}function V(n,e,t){var r,u,o=1/0,i=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var c=0,a=(n=M(n)?n:$n(n)).length;c<a;c++)null!=(r=n[c])&&r<o&&(o=r);else e=w(e,t),D(n,(function(n,t,r){((u=e(n,t,r))<i||u===1/0&&o===1/0)&&(o=n,i=u)}));return o}function X(n){return G(n,1/0)}function G(n,e,t){if(null==e||t)return M(n)||(n=$n(n)),n[Je(n.length-1)];var r=M(n)?le(n):$n(n),u=S(r);e=Math.max(Math.min(e,u),0);for(var o=u-1,i=0;i<e;i++){var c=Je(i,o),a=r[i];r[i]=r[c],r[c]=a}return r.slice(0,e)}function $(n,e,t){var r=0;return e=w(e,t),z(I(n,(function(n,t,u){return{value:n,index:r++,criteria:e(n,t,u)}})).sort((function(n,e){var t=n.criteria,r=e.criteria;if(t!==r){if(t>r||void 0===t)return 1;if(t<r||void 0===r)return-1}return n.index-e.index})),"value")}function Q(n,e){return function(t,r,u){var o=e?[[],[]]:{};return r=w(r,u),D(t,(function(e,u){var i=r(e,u,t);n(o,e,i)})),o}}var Y=Q((function(n,e,t){A(n,t)?n[t].push(e):n[t]=[e]})),Z=Q((function(n,e,t){n[t]=e})),nn=Q((function(n,e,t){A(n,t)?n[t]++:n[t]=1})),en=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function tn(n){return n?me(n)?a.call(n):we(n)?n.match(en):M(n)?I(n,Ne):$n(n):[]}function rn(n){return null==n?0:M(n)?n.length:Xn(n).length}var un=Q((function(n,e,t){n[t?0:1].push(e)}),!0);function on(n,e,t){return null==n||n.length<1?null==e?void 0:[]:null==e||t?n[0]:cn(n,n.length-e)}function cn(n,e,t){return a.call(n,0,Math.max(0,n.length-(null==e||t?1:e)))}function an(n,e,t){return null==n||n.length<1?null==e?void 0:[]:null==e||t?n[n.length-1]:fn(n,Math.max(0,n.length-e))}function fn(n,e,t){return a.call(n,null==e||t?1:e)}function ln(n){return B(n,Boolean)}function sn(n,e,t,r){for(var u=(r=r||[]).length,o=0,i=S(n);o<i;o++){var c=n[o];if(M(c)&&(me(c)||je(c)))if(e)for(var a=0,f=c.length;a<f;)r[u++]=c[a++];else sn(c,e,t,r),u=r.length;else t||(r[u++]=c)}return r}function dn(n,e){return sn(n,e,!1)}var pn=x((function(n,e){return bn(n,e)}));function hn(n,e,t,r){Te(e)||(r=t,t=e,e=!1),null!=t&&(t=w(t,r));for(var u=[],o=[],i=0,c=S(n);i<c;i++){var a=n[i],f=t?t(a,i,n):a;e&&!t?(i&&o===f||u.push(a),o=f):t?L(o,f)||(o.push(f),u.push(a)):L(u,a)||u.push(a)}return u}var vn=x((function(n){return hn(sn(n,!0,!0))}));function yn(n){for(var e=[],t=arguments.length,r=0,u=S(n);r<u;r++){var o=n[r];if(!L(e,o)){var i;for(i=1;i<t&&L(arguments[i],o);i++);i===t&&e.push(o)}}return e}var bn=x((function(n,e){return e=sn(e,!0,!0),B(n,(function(n){return!L(e,n)}))}));function mn(n){for(var e=n&&J(n,S).length||0,t=Array(e),r=0;r<e;r++)t[r]=z(n,r);return t}var gn=x(mn);function jn(n,e){for(var t={},r=0,u=S(n);r<u;r++)e?t[n[r]]=e[r]:t[n[r][0]]=n[r][1];return t}function _n(n){return function(e,t,r){t=w(t,r);for(var u=S(e),o=n>0?0:u-1;o>=0&&o<u;o+=n)if(t(e[o],o,e))return o;return-1}}var wn=_n(1),xn=_n(-1);function On(n,e,t,r){for(var u=(t=w(t,r,1))(e),o=0,i=S(n);o<i;){var c=Math.floor((o+i)/2);t(n[c])<u?o=c+1:i=c}return o}function kn(n,e,t){return function(r,u,o){var i=0,c=S(r);if("number"==typeof o)n>0?i=o>=0?o:Math.max(o+c,i):c=o>=0?Math.min(o+1,c):o+c+1;else if(t&&o&&c)return r[o=t(r,u)]===u?o:-1;if(u!=u)return(o=e(a.call(r,i,c),Ce))>=0?o+i:-1;for(o=n>0?i:c-1;o>=0&&o<c;o+=n)if(r[o]===u)return o;return-1}}var An=kn(1,wn,On),Pn=kn(-1,xn);function En(n,e,t){null==e&&(e=n||0,n=0),t||(t=e<n?-1:1);for(var r=Math.max(Math.ceil((e-n)/t),0),u=Array(r),o=0;o<r;o++,n+=t)u[o]=n;return u}function Sn(n,e){if(null==e||e<1)return[];for(var t=[],r=0,u=n.length;r<u;)t.push(a.call(n,r,r+=e));return t}function Mn(n,e,t,r,u){if(!(r instanceof e))return n.apply(t,u);var o=O(n.prototype),i=n.apply(o,u);return ge(i)?i:o}var Dn=x((function(n,e,t){if(!_e(n))throw new TypeError("Bind must be called on a function");var r=x((function(u){return Mn(n,r,e,this,t.concat(u))}));return r})),In=x((function(n,e){var t=In.placeholder,r=function(){for(var u=0,o=e.length,i=Array(o),c=0;c<o;c++)i[c]=e[c]===t?arguments[u++]:e[c];for(;u<arguments.length;)i.push(arguments[u++]);return Mn(n,r,this,this,i)};return r}));In.placeholder=b;var Rn=x((function(n,e){var t=(e=sn(e,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var r=e[t];n[r]=Dn(n[r],n)}}));function Cn(n,e){var t=function(r){var u=t.cache,o=""+(e?e.apply(this,arguments):r);return A(u,o)||(u[o]=n.apply(this,arguments)),u[o]};return t.cache={},t}var Tn=x((function(n,e,t){return setTimeout((function(){return n.apply(null,t)}),e)})),Hn=In(Tn,b,1);function Bn(n,e,t){var r,u,o,i,c=0;t||(t={});var a=function(){c=!1===t.leading?0:Ve(),r=null,i=n.apply(u,o),r||(u=o=null)},f=function(){var f=Ve();c||!1!==t.leading||(c=f);var l=e-(f-c);return u=this,o=arguments,l<=0||l>e?(r&&(clearTimeout(r),r=null),c=f,i=n.apply(u,o),r||(u=o=null)):r||!1===t.trailing||(r=setTimeout(a,l)),i};return f.cancel=function(){clearTimeout(r),c=0,r=u=o=null},f}function Fn(n,e,t){var r,u,o=function(e,t){r=null,t&&(u=n.apply(e,t))},i=x((function(i){if(r&&clearTimeout(r),t){var c=!r;r=setTimeout(o,e),c&&(u=n.apply(this,i))}else r=Tn(o,e,this,i);return u}));return i.cancel=function(){clearTimeout(r),r=null},i}function Nn(n,e){return In(e,n)}function qn(n){return function(){return!n.apply(this,arguments)}}function Ln(){var n=arguments,e=n.length-1;return function(){for(var t=e,r=n[e].apply(this,arguments);t--;)r=n[t].call(this,r);return r}}function Un(n,e){return function(){if(--n<1)return e.apply(this,arguments)}}function zn(n,e){var t;return function(){return--n>0&&(t=e.apply(this,arguments)),n<=1&&(e=null),t}}var Wn=In(zn,2),Kn=!{toString:null}.propertyIsEnumerable("toString"),Jn=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function Vn(n,e){var t=Jn.length,r=n.constructor,u=_e(r)&&r.prototype||o,i="constructor";for(A(n,i)&&!L(e,i)&&e.push(i);t--;)(i=Jn[t])in n&&n[i]!==u[i]&&!L(e,i)&&e.push(i)}function Xn(n){if(!ge(n))return[];if(d)return d(n);var e=[];for(var t in n)A(n,t)&&e.push(t);return Kn&&Vn(n,e),e}function Gn(n){if(!ge(n))return[];var e=[];for(var t in n)e.push(t);return Kn&&Vn(n,e),e}function $n(n){for(var e=Xn(n),t=e.length,r=Array(t),u=0;u<t;u++)r[u]=n[e[u]];return r}function Qn(n,e,t){e=w(e,t);for(var r=Xn(n),u=r.length,o={},i=0;i<u;i++){var c=r[i];o[c]=e(n[c],c,n)}return o}function Yn(n){for(var e=Xn(n),t=e.length,r=Array(t),u=0;u<t;u++)r[u]=[e[u],n[e[u]]];return r}function Zn(n){for(var e={},t=Xn(n),r=0,u=t.length;r<u;r++)e[n[t[r]]]=t[r];return e}function ne(n){var e=[];for(var t in n)_e(n[t])&&e.push(t);return e.sort()}function ee(n,e){return function(t){var r=arguments.length;if(e&&(t=Object(t)),r<2||null==t)return t;for(var u=1;u<r;u++)for(var o=arguments[u],i=n(o),c=i.length,a=0;a<c;a++){var f=i[a];e&&void 0!==t[f]||(t[f]=o[f])}return t}}var te=ee(Gn),re=ee(Xn);function ue(n,e,t){e=w(e,t);for(var r,u=Xn(n),o=0,i=u.length;o<i;o++)if(e(n[r=u[o]],r,n))return r}function oe(n,e,t){return e in t}var ie=x((function(n,e){var t={},r=e[0];if(null==n)return t;_e(r)?(e.length>1&&(r=g(r,e[1])),e=Gn(n)):(r=oe,e=sn(e,!1,!1),n=Object(n));for(var u=0,o=e.length;u<o;u++){var i=e[u],c=n[i];r(c,i,n)&&(t[i]=c)}return t})),ce=x((function(n,e){var t,r=e[0];return _e(r)?(r=qn(r),e.length>1&&(t=e[1])):(e=I(sn(e,!1,!1),String),r=function(n,t){return!L(e,t)}),ie(n,r,t)})),ae=ee(Gn,!0);function fe(n,e){var t=O(n);return e&&re(t,e),t}function le(n){return ge(n)?me(n)?n.slice():te({},n):n}function se(n,e){return e(n),n}function de(n,e){var t=Xn(e),r=t.length;if(null==n)return!r;for(var u=Object(n),o=0;o<r;o++){var i=t[o];if(e[i]!==u[i]||!(i in u))return!1}return!0}function pe(n,e,t,r){if(n===e)return 0!==n||1/n==1/e;if(null==n||null==e)return!1;if(n!=n)return e!=e;var u=typeof n;return("function"===u||"object"===u||"object"==typeof e)&&function(n,e,t,r){n instanceof b&&(n=n._wrapped);e instanceof b&&(e=e._wrapped);var u=f.call(n);if(u!==f.call(e))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+e;case"[object Number]":return+n!=+n?+e!=+e:0==+n?1/+n==1/e:+n==+e;case"[object Date]":case"[object Boolean]":return+n==+e;case"[object Symbol]":return i.valueOf.call(n)===i.valueOf.call(e)}var o="[object Array]"===u;if(!o){if("object"!=typeof n||"object"!=typeof e)return!1;var c=n.constructor,a=e.constructor;if(c!==a&&!(_e(c)&&c instanceof c&&_e(a)&&a instanceof a)&&"constructor"in n&&"constructor"in e)return!1}r=r||[];var l=(t=t||[]).length;for(;l--;)if(t[l]===n)return r[l]===e;if(t.push(n),r.push(e),o){if((l=n.length)!==e.length)return!1;for(;l--;)if(!pe(n[l],e[l],t,r))return!1}else{var s,d=Xn(n);if(l=d.length,Xn(e).length!==l)return!1;for(;l--;)if(s=d[l],!A(e,s)||!pe(n[s],e[s],t,r))return!1}return t.pop(),r.pop(),!0}(n,e,t,r)}function he(n,e){return pe(n,e)}function ve(n){return null==n||(M(n)&&(me(n)||we(n)||je(n))?0===n.length:0===Xn(n).length)}function ye(n){return!(!n||1!==n.nodeType)}function be(n){return function(e){return f.call(e)==="[object "+n+"]"}}var me=s||be("Array");function ge(n){var e=typeof n;return"function"===e||"object"===e&&!!n}var je=be("Arguments"),_e=be("Function"),we=be("String"),xe=be("Number"),Oe=be("Date"),ke=be("RegExp"),Ae=be("Error"),Pe=be("Symbol"),Ee=be("Map"),Se=be("WeakMap"),Me=be("Set"),De=be("WeakSet");!function(){je(arguments)||(je=function(n){return A(n,"callee")})}();var Ie=r.document&&r.document.childNodes;function Re(n){return!Pe(n)&&v(n)&&!h(parseFloat(n))}function Ce(n){return xe(n)&&h(n)}function Te(n){return!0===n||!1===n||"[object Boolean]"===f.call(n)}function He(n){return null===n}function Be(n){return void 0===n}function Fe(n,e){if(!me(e))return A(n,e);for(var t=e.length,r=0;r<t;r++){var u=e[r];if(null==n||!l.call(n,u))return!1;n=n[u]}return!!t}function Ne(n){return n}function qe(n){return function(){return n}}function Le(){}function Ue(n){return me(n)?function(e){return P(e,n)}:k(n)}function ze(n){return null==n?function(){}:function(e){return me(e)?P(n,e):n[e]}}function We(n){return n=re({},n),function(e){return de(e,n)}}function Ke(n,e,t){var r=Array(Math.max(0,n));e=g(e,t,1);for(var u=0;u<n;u++)r[u]=e(u);return r}function Je(n,e){return null==e&&(e=n,n=0),n+Math.floor(Math.random()*(e-n+1))}"object"!=typeof Int8Array&&"function"!=typeof Ie&&(_e=function(n){return"function"==typeof n||!1});var Ve=Date.now||function(){return(new Date).getTime()},Xe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Ge=Zn(Xe);function $e(n){var e=function(e){return n[e]},t="(?:"+Xn(n).join("|")+")",r=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,r.test(n)?n.replace(u,e):n}}var Qe=$e(Xe),Ye=$e(Ge);function Ze(n,e,t){me(e)||(e=[e]);var r=e.length;if(!r)return _e(t)?t.call(n):t;for(var u=0;u<r;u++){var o=null==n?void 0:n[e[u]];void 0===o&&(o=t,u=r),n=_e(o)?o.call(n):o}return n}var nt=0;function et(n){var e=++nt+"";return n?n+e:e}var tt=b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},rt=/(.)^/,ut={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},ot=/\\|'|\r|\n|\u2028|\u2029/g,it=function(n){return"\\"+ut[n]};function ct(n,e,t){!e&&t&&(e=t),e=ae({},e,b.templateSettings);var r,u=RegExp([(e.escape||rt).source,(e.interpolate||rt).source,(e.evaluate||rt).source].join("|")+"|$","g"),o=0,i="__p+='";n.replace(u,(function(e,t,r,u,c){return i+=n.slice(o,c).replace(ot,it),o=c+e.length,t?i+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":r?i+="'+\n((__t=("+r+"))==null?'':__t)+\n'":u&&(i+="';\n"+u+"\n__p+='"),e})),i+="';\n",e.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{r=new Function(e.variable||"obj","_",i)}catch(n){throw n.source=i,n}var c=function(n){return r.call(this,n,b)},a=e.variable||"obj";return c.source="function("+a+"){\n"+i+"}",c}function at(n){var e=b(n);return e._chain=!0,e}function ft(n,e){return n._chain?b(e).chain():e}function lt(n){return D(ne(n),(function(e){var t=b[e]=n[e];b.prototype[e]=function(){var n=[this._wrapped];return c.apply(n,arguments),ft(this,t.apply(b,n))}})),b}D(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var e=u[n];b.prototype[n]=function(){var t=this._wrapped;return e.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0],ft(this,t)}})),D(["concat","join","slice"],(function(n){var e=u[n];b.prototype[n]=function(){return ft(this,e.apply(this._wrapped,arguments))}})),b.prototype.value=function(){return this._wrapped},b.prototype.valueOf=b.prototype.toJSON=b.prototype.value,b.prototype.toString=function(){return String(this._wrapped)}}.call(this,t("./node_modules/webpack/buildin/global.js"))},"./node_modules/webpack/buildin/global.js":function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"==typeof window&&(t=window)}n.exports=t},"./src/Container.js":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return R}));var r=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),u=t.n(r),o=t("./node_modules/@babel/runtime/helpers/createClass.js"),i=t.n(o),c=t("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),a=t.n(c),f=t("./node_modules/@babel/runtime/helpers/inherits.js"),l=t.n(f),s=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=t.n(s),p=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),h=t.n(p),v=t("./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js"),y=t.n(v),b=t("./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js"),m=t.n(b),g=t("./node_modules/@babel/runtime/helpers/newArrowCheck.js"),j=t.n(g),_=t("./node_modules/@babel/runtime/helpers/construct.js"),w=t.n(_),x=t("./node_modules/underscore/modules/index.js"),O=Object(x.mixin)(x);O._=O;var k=function(){function n(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];u()(this,n),this.singleton=!1,this.callback=null,this.context=null,this.name=null,this.name=e,this.singleton=o,this.context=r,this.callback=this.getClosure(t)}return i()(n,[{key:"getClosure",value:function(n){var e=this;if(!Object(x.isFunction)(n))return Object(x.isObject)(n)&&void 0!==n.constructor?function(t){j()(this,e),this.context=t;for(var r=arguments.length,u=new Array(r>1?r-1:0),o=1;o<r;o++)u[o-1]=arguments[o];return w()(n.constructor,u)}.bind(this):function(t){return j()(this,e),this.context=t,n}.bind(this);try{return void 0===n(this.context)?function(t){j()(this,e),this.context=t;for(var r=arguments.length,u=new Array(r>1?r-1:0),o=1;o<r;o++)u[o-1]=arguments[o];return w()(n,u)}.bind(this):function(t){j()(this,e),this.context=t;for(var r=arguments.length,u=new Array(r>1?r-1:0),o=1;o<r;o++)u[o-1]=arguments[o];return n.apply(void 0,[t].concat(u))}.bind(this)}catch(t){return function(t){j()(this,e),this.context=t;for(var r=arguments.length,u=new Array(r>1?r-1:0),o=1;o<r;o++)u[o-1]=arguments[o];return w()(n,u)}.bind(this)}}},{key:"resovle",value:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];if(this.singleton){var r=this.callback.apply(this,[this.context].concat(e));return this.context.instance(this.name,r),r}return this.callback.apply(this,[this.context].concat(e))}}]),n}(),A=function(){function n(){u()(this,n),Object.defineProperty(this,P,{writable:!0,value:{}}),Object.defineProperty(this,E,{writable:!0,value:{}}),Object.defineProperty(this,S,{writable:!0,value:{}}),Object.defineProperty(this,M,{writable:!0,value:{}})}return i()(n,[{key:"instance",value:function(n,e){if(Object(x.isFunction)(e))throw TypeError("注册对象不可以是函数或者类");return y()(this,P)[P][n]=e,this}},{key:"bind",value:function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return y()(this,E)[E][n]=new k(n,e,this,t),this}},{key:"bindMethod",value:function(n,e){y()(this,M)[M][this.parseBindMethod(n)]=e}},{key:"parseBindMethod",value:function(n){return Object(x.isArray)(n)?"".concat(n[0],"@").concat(n[1]):n}},{key:"hasMethodBinding",value:function(n){return n=this.parseBindMethod(n),void 0!==y()(this,M)[M][n]}},{key:"callMethodBinding",value:function(n){var e=y()(this,M)[M];if(this.hasMethodBinding(n)){for(var t=arguments.length,r=new Array(t>1?t-1:0),u=1;u<t;u++)r[u-1]=arguments[u];return e[n].apply(e,r)}}},{key:"singleton",value:function(n,e){return this.bind(n,e,!0)}},{key:"getAlias",value:function(n){return void 0===y()(this,S)[S][n]?n:this.getAlias(n)}},{key:"make",value:function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return this.resovle.apply(this,[n].concat(t))}},{key:"resovle",value:function(n){n=this.getAlias(n);var e=y()(this,P)[P];if(void 0!==e[n])return e[n];var t=y()(this,E)[E],r=t[n];if(void 0!==r){for(var u=arguments.length,o=new Array(u>1?u-1:0),i=1;i<u;i++)o[i-1]=arguments[i];var c=r.resovle.apply(r,o);return r.singleton&&(e[n]=c),c}return null}},{key:"get",value:function(n){return this.resovle(n)}},{key:"extend",value:function(n,e){n=this.getAlias(n);var t=y()(this,P)[P];if(void 0!==t[n]){var r=t[n];t[n]=e(r,this)}}},{key:"mixin",value:function(n){var e=this;Object(x.each)(n,function(n,t){j()(this,e),this[t]=n}.bind(this))}},{key:"isShared",value:function(n){var e=y()(this,P)[P],t=y()(this,E)[E];return void 0!==e[n]||void 0!==t[n]&&t[n].singleton}}]),n}(),P=m()("instances"),E=m()("bindings"),S=m()("aliases"),M=m()("methodBindings");function D(n){try{return new n instanceof n}catch(n){return!1}}function I(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var R=function(n){l()(r,n);var e,t=(e=r,function(){var n,t=h()(e);if(I()){var r=h()(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return d()(this,n)});function r(){var n;return u()(this,r),n=t.call(this),Object.defineProperty(a()(n),C,{writable:!0,value:null}),y()(a()(n),C)[C]=new Proxy(a()(n),{get:function(n,e){return void 0===n[e]?n.get(e):n[e]},set:function(n,e,t){return D(t)?n.bind(e,t):Object(x.isFunction)(t)?void 0===t()?n.bindMethod(e,t):n.bind(e,t):n.instance(e,t),t}}),n}return i()(r,[{key:"getProxy",value:function(){return y()(this,C)[C]}},{key:"isClass",value:function(n){return D(n)}}],[{key:"getInstance",value:function(){return r._instance||(r._instance=new r),r._instance.getProxy()}}]),r}(A),C=m()("proxy");R._instance=null}}).default}));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./node_modules/charenc/charenc.js":
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(/*! crypt */ "./node_modules/crypt/crypt.js"),
      utf8 = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").utf8,
      isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js"),
      bin = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/underscore/modules/index-all.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/index-all.js ***!
  \******************************************************/
/*! exports provided: default, VERSION, iteratee, restArguments, each, forEach, map, collect, reduce, foldl, inject, reduceRight, foldr, find, detect, filter, select, reject, every, all, some, any, contains, includes, include, invoke, pluck, where, findWhere, max, min, shuffle, sample, sortBy, groupBy, indexBy, countBy, toArray, size, partition, first, head, take, initial, last, rest, tail, drop, compact, flatten, without, uniq, unique, union, intersection, difference, unzip, zip, object, findIndex, findLastIndex, sortedIndex, indexOf, lastIndexOf, range, chunk, bind, partial, bindAll, memoize, delay, defer, throttle, debounce, wrap, negate, compose, after, before, once, keys, allKeys, values, mapObject, pairs, invert, functions, methods, extend, extendOwn, assign, findKey, pick, omit, defaults, create, clone, tap, isMatch, isEqual, isEmpty, isElement, isArray, isObject, isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isSymbol, isMap, isWeakMap, isSet, isWeakSet, isFinite, isNaN, isBoolean, isNull, isUndefined, has, identity, constant, noop, property, propertyOf, matcher, matches, times, random, now, escape, unescape, result, uniqueId, templateSettings, template, chain, mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-default.js */ "./node_modules/underscore/modules/index-default.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_default_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/underscore/modules/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["iteratee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["restArguments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "each", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["each"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["collect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["foldl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reduceRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["foldr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["detect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["every"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["includes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "include", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["include"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["invoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pluck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "where", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["where"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findWhere"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["max"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["min"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["shuffle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sample"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sortBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["groupBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["indexBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["countBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["toArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["size"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["partition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["first"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "head", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["head"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["initial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["last"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["rest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["tail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["drop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["compact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "without", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["without"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["uniq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unique"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["union"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["intersection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["difference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unzip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["zip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findLastIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sortedIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["lastIndexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["chunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["bind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["partial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["bindAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["defer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["throttle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["negate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "after", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["after"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "before", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["before"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["once"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["keys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["allKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["mapObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["invert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["functions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["methods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["extendOwn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["clone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["tap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArguments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isWeakSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isFinite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["has"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["constant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["propertyOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["matcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["matches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "times", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["times"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["escape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unescape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "result", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["result"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["uniqueId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["templateSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "template", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["template"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["chain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["mixin"]; });





/***/ }),

/***/ "./node_modules/underscore/modules/index-default.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/index-default.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/underscore/modules/index.js");



// Add all of the Underscore functions to the wrapper object.
var _ = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["mixin"])(_index_js__WEBPACK_IMPORTED_MODULE_0__);
// Legacy Node.js API
_._ = _;
// Export the Underscore API.
/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "./node_modules/underscore/modules/index.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/index.js ***!
  \**************************************************/
/*! exports provided: default, VERSION, iteratee, restArguments, each, forEach, map, collect, reduce, foldl, inject, reduceRight, foldr, find, detect, filter, select, reject, every, all, some, any, contains, includes, include, invoke, pluck, where, findWhere, max, min, shuffle, sample, sortBy, groupBy, indexBy, countBy, toArray, size, partition, first, head, take, initial, last, rest, tail, drop, compact, flatten, without, uniq, unique, union, intersection, difference, unzip, zip, object, findIndex, findLastIndex, sortedIndex, indexOf, lastIndexOf, range, chunk, bind, partial, bindAll, memoize, delay, defer, throttle, debounce, wrap, negate, compose, after, before, once, keys, allKeys, values, mapObject, pairs, invert, functions, methods, extend, extendOwn, assign, findKey, pick, omit, defaults, create, clone, tap, isMatch, isEqual, isEmpty, isElement, isArray, isObject, isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isSymbol, isMap, isWeakMap, isSet, isWeakSet, isFinite, isNaN, isBoolean, isNull, isUndefined, has, identity, constant, noop, property, propertyOf, matcher, matches, times, random, now, escape, unescape, result, uniqueId, templateSettings, template, chain, mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return iteratee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return restArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return reduceRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return reduceRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return reject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "include", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return invoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return pluck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "where", function() { return where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return findWhere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return indexBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return countBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return initial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return compact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return uniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return intersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return difference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return unzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return findLastIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return sortedIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return lastIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return chunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return partial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return bindAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return allKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return mapObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return functions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return functions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return extendOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return extendOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return findKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return tap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return isMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return isArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return isMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return isWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return isWeakSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return isFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return constant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return propertyOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return matcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "times", function() { return times; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return unescape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "result", function() { return result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return templateSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
//     Underscore.js 1.10.2
//     https://underscorejs.org
//     (c) 2009-2020 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

// Baseline setup
// --------------

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = typeof self == 'object' && self.self === self && self ||
          typeof global == 'object' && global.global === global && global ||
          Function('return this')() ||
          {};

// Save bytes in the minified (but not gzipped) version:
var ArrayProto = Array.prototype, ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

// Create quick reference variables for speed access to core prototypes.
var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

// All **ECMAScript 5** native function implementations that we hope to use
// are declared here.
var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeCreate = Object.create;

// Create references to these builtin functions because we override them.
var _isNaN = root.isNaN,
    _isFinite = root.isFinite;

// Naked function reference for surrogate-prototype-swapping.
var Ctor = function(){};

// The Underscore object. All exported functions below are added to it in the
// modules/index-all.js using the mixin function.
function _(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
}

// Current version.
var VERSION = _.VERSION = '1.10.2';

// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
function optimizeCb(func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1: return function(value) {
      return func.call(context, value);
    };
    // The 2-argument case is omitted because we’re not using it.
    case 3: return function(value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection);
    };
  }
  return function() {
    return func.apply(context, arguments);
  };
}

// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `identity`,
// an arbitrary callback, a property matcher, or a property accessor.
function baseIteratee(value, context, argCount) {
  if (value == null) return identity;
  if (isFunction(value)) return optimizeCb(value, context, argCount);
  if (isObject(value) && !isArray(value)) return matcher(value);
  return property(value);
}

// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only argCount argument.
_.iteratee = iteratee;
function iteratee(value, context) {
  return baseIteratee(value, context, Infinity);
}

// The function we actually call internally. It invokes _.iteratee if
// overridden, otherwise baseIteratee.
function cb(value, context, argCount) {
  if (_.iteratee !== iteratee) return _.iteratee(value, context);
  return baseIteratee(value, context, argCount);
}

// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0),
        rest = Array(length),
        index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, arguments[0], rest);
      case 2: return func.call(this, arguments[0], arguments[1], rest);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
}

// An internal function for creating a new object that inherits from another.
function baseCreate(prototype) {
  if (!isObject(prototype)) return {};
  if (nativeCreate) return nativeCreate(prototype);
  Ctor.prototype = prototype;
  var result = new Ctor;
  Ctor.prototype = null;
  return result;
}

function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}

function _has(obj, path) {
  return obj != null && hasOwnProperty.call(obj, path);
}

function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}

// Helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var getLength = shallowProperty('length');
function isArrayLike(collection) {
  var length = getLength(collection);
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

// Collection Functions
// --------------------

// The cornerstone, an `each` implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
function each(obj, iteratee, context) {
  iteratee = optimizeCb(iteratee, context);
  var i, length;
  if (isArrayLike(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    var _keys = keys(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}


// Return the results of applying the iteratee to each element.
function map(obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  var _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length,
      results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}


// Create a reducing function iterating left or right.
function createReduce(dir) {
  // Wrap code that reassigns argument variables in a separate function than
  // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
  var reducer = function(obj, iteratee, memo, initial) {
    var _keys = !isArrayLike(obj) && keys(obj),
        length = (_keys || obj).length,
        index = dir > 0 ? 0 : length - 1;
    if (!initial) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  return function(obj, iteratee, memo, context) {
    var initial = arguments.length >= 3;
    return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
  };
}

// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
var reduce = createReduce(1);


// The right-associative version of reduce, also known as `foldr`.
var reduceRight = createReduce(-1);


// Return the first value which passes a truth test.
function find(obj, predicate, context) {
  var keyFinder = isArrayLike(obj) ? findIndex : findKey;
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}


// Return all the elements that pass a truth test.
function filter(obj, predicate, context) {
  var results = [];
  predicate = cb(predicate, context);
  each(obj, function(value, index, list) {
    if (predicate(value, index, list)) results.push(value);
  });
  return results;
}


// Return all the elements for which a truth test fails.
function reject(obj, predicate, context) {
  return filter(obj, negate(cb(predicate)), context);
}

// Determine whether all of the elements match a truth test.
function every(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj)) return false;
  }
  return true;
}


// Determine if at least one element in the object matches a truth test.
function some(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }
  return false;
}


// Determine if the array or object contains a given item (using `===`).
function contains(obj, item, fromIndex, guard) {
  if (!isArrayLike(obj)) obj = values(obj);
  if (typeof fromIndex != 'number' || guard) fromIndex = 0;
  return indexOf(obj, item, fromIndex) >= 0;
}


// Invoke a method (with arguments) on every item in a collection.
var invoke = restArguments(function(obj, path, args) {
  var contextPath, func;
  if (isFunction(path)) {
    func = path;
  } else if (isArray(path)) {
    contextPath = path.slice(0, -1);
    path = path[path.length - 1];
  }
  return map(obj, function(context) {
    var method = func;
    if (!method) {
      if (contextPath && contextPath.length) {
        context = deepGet(context, contextPath);
      }
      if (context == null) return void 0;
      method = context[path];
    }
    return method == null ? method : method.apply(context, args);
  });
});

// Convenience version of a common use case of `map`: fetching a property.
function pluck(obj, key) {
  return map(obj, property(key));
}

// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
function where(obj, attrs) {
  return filter(obj, matcher(attrs));
}

// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
function findWhere(obj, attrs) {
  return find(obj, matcher(attrs));
}

// Return the maximum element (or element-based computation).
function max(obj, iteratee, context) {
  var result = -Infinity, lastComputed = -Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result) {
        result = value;
      }
    }
  } else {
    iteratee = cb(iteratee, context);
    each(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}

// Return the minimum element (or element-based computation).
function min(obj, iteratee, context) {
  var result = Infinity, lastComputed = Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result) {
        result = value;
      }
    }
  } else {
    iteratee = cb(iteratee, context);
    each(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed < lastComputed || computed === Infinity && result === Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}

// Shuffle a collection.
function shuffle(obj) {
  return sample(obj, Infinity);
}

// Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!isArrayLike(obj)) obj = values(obj);
    return obj[random(obj.length - 1)];
  }
  var sample = isArrayLike(obj) ? clone(obj) : values(obj);
  var length = getLength(sample);
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = random(index, last);
    var temp = sample[index];
    sample[index] = sample[rand];
    sample[rand] = temp;
  }
  return sample.slice(0, n);
}

// Sort the object's values by a criterion produced by an iteratee.
function sortBy(obj, iteratee, context) {
  var index = 0;
  iteratee = cb(iteratee, context);
  return pluck(map(obj, function(value, key, list) {
    return {
      value: value,
      index: index++,
      criteria: iteratee(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
  }), 'value');
}

// An internal function used for aggregate "group by" operations.
function group(behavior, partition) {
  return function(obj, iteratee, context) {
    var result = partition ? [[], []] : {};
    iteratee = cb(iteratee, context);
    each(obj, function(value, index) {
      var key = iteratee(value, index, obj);
      behavior(result, value, key);
    });
    return result;
  };
}

// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
var groupBy = group(function(result, value, key) {
  if (_has(result, key)) result[key].push(value); else result[key] = [value];
});

// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
var indexBy = group(function(result, value, key) {
  result[key] = value;
});

// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
var countBy = group(function(result, value, key) {
  if (_has(result, key)) result[key]++; else result[key] = 1;
});

var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
// Safely create a real, live array from anything iterable.
function toArray(obj) {
  if (!obj) return [];
  if (isArray(obj)) return slice.call(obj);
  if (isString(obj)) {
    // Keep surrogate pair characters together
    return obj.match(reStrSymbol);
  }
  if (isArrayLike(obj)) return map(obj, identity);
  return values(obj);
}

// Return the number of elements in an object.
function size(obj) {
  if (obj == null) return 0;
  return isArrayLike(obj) ? obj.length : keys(obj).length;
}

// Split a collection into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.
var partition = group(function(result, value, pass) {
  result[pass ? 0 : 1].push(value);
}, true);

// Array Functions
// ---------------

// Get the first element of an array. Passing **n** will return the first N
// values in the array. The **guard** check allows it to work with `map`.
function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null ? void 0 : [];
  if (n == null || guard) return array[0];
  return initial(array, array.length - n);
}


// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
function initial(array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}

// Get the last element of an array. Passing **n** will return the last N
// values in the array.
function last(array, n, guard) {
  if (array == null || array.length < 1) return n == null ? void 0 : [];
  if (n == null || guard) return array[array.length - 1];
  return rest(array, Math.max(0, array.length - n));
}

// Returns everything but the first entry of the array. Especially useful on
// the arguments object. Passing an **n** will return the rest N values in the
// array.
function rest(array, n, guard) {
  return slice.call(array, n == null || guard ? 1 : n);
}


// Trim out all falsy values from an array.
function compact(array) {
  return filter(array, Boolean);
}

// Internal implementation of a recursive `flatten` function.
function _flatten(input, shallow, strict, output) {
  output = output || [];
  var idx = output.length;
  for (var i = 0, length = getLength(input); i < length; i++) {
    var value = input[i];
    if (isArrayLike(value) && (isArray(value) || isArguments(value))) {
      // Flatten current level of array or arguments object.
      if (shallow) {
        var j = 0, len = value.length;
        while (j < len) output[idx++] = value[j++];
      } else {
        _flatten(value, shallow, strict, output);
        idx = output.length;
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}

// Flatten out an array, either recursively (by default), or just one level.
function flatten(array, shallow) {
  return _flatten(array, shallow, false);
}

// Return a version of the array that does not contain the specified value(s).
var without = restArguments(function(array, otherArrays) {
  return difference(array, otherArrays);
});

// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.
function uniq(array, isSorted, iteratee, context) {
  if (!isBoolean(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }
  if (iteratee != null) iteratee = cb(iteratee, context);
  var result = [];
  var seen = [];
  for (var i = 0, length = getLength(array); i < length; i++) {
    var value = array[i],
        computed = iteratee ? iteratee(value, i, array) : value;
    if (isSorted && !iteratee) {
      if (!i || seen !== computed) result.push(value);
      seen = computed;
    } else if (iteratee) {
      if (!contains(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!contains(result, value)) {
      result.push(value);
    }
  }
  return result;
}


// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
var union = restArguments(function(arrays) {
  return uniq(_flatten(arrays, true, true));
});

// Produce an array that contains every item shared between all the
// passed-in arrays.
function intersection(array) {
  var result = [];
  var argsLength = arguments.length;
  for (var i = 0, length = getLength(array); i < length; i++) {
    var item = array[i];
    if (contains(result, item)) continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!contains(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }
  return result;
}

// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
var difference = restArguments(function(array, rest) {
  rest = _flatten(rest, true, true);
  return filter(array, function(value){
    return !contains(rest, value);
  });
});

// Complement of zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.
function unzip(array) {
  var length = array && max(array, getLength).length || 0;
  var result = Array(length);

  for (var index = 0; index < length; index++) {
    result[index] = pluck(array, index);
  }
  return result;
}

// Zip together multiple lists into a single array -- elements that share
// an index go together.
var zip = restArguments(unzip);

// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of pairs.
function object(list, values) {
  var result = {};
  for (var i = 0, length = getLength(list); i < length; i++) {
    if (values) {
      result[list[i]] = values[i];
    } else {
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
}

// Generator function to create the findIndex and findLastIndex functions.
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length = getLength(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }
    return -1;
  };
}

// Returns the first index on an array-like that passes a predicate test.
var findIndex = createPredicateIndexFinder(1);
var findLastIndex = createPredicateIndexFinder(-1);

// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context, 1);
  var value = iteratee(obj);
  var low = 0, high = getLength(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
  }
  return low;
}

// Generator function to create the indexOf and lastIndexOf functions.
function createIndexFinder(dir, predicateFind, sortedIndex) {
  return function(array, item, idx) {
    var i = 0, length = getLength(array);
    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(slice.call(array, i, length), isNaN);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}

// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
var indexOf = createIndexFinder(1, findIndex, sortedIndex);
var lastIndexOf = createIndexFinder(-1, findLastIndex);

// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](https://docs.python.org/library/functions.html#range).
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
}

// Chunk a single array into multiple arrays, each containing `count` or fewer
// items.
function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result = [];
  var i = 0, length = array.length;
  while (i < length) {
    result.push(slice.call(array, i, i += count));
  }
  return result;
}

// Function (ahem) Functions
// ------------------

// Determines whether to execute a function as a constructor
// or a normal function with the provided arguments.
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (isObject(result)) return result;
  return self;
}

// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
var bind = restArguments(function(func, context, args) {
  if (!isFunction(func)) throw new TypeError('Bind must be called on a function');
  var bound = restArguments(function(callArgs) {
    return executeBound(func, bound, context, this, args.concat(callArgs));
  });
  return bound;
});

// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `partial.placeholder` for a custom placeholder argument.
var partial = restArguments(function(func, boundArgs) {
  var placeholder = partial.placeholder;
  var bound = function() {
    var position = 0, length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }
    while (position < arguments.length) args.push(arguments[position++]);
    return executeBound(func, bound, this, this, args);
  };
  return bound;
});

partial.placeholder = _;

// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
var bindAll = restArguments(function(obj, _keys) {
  _keys = _flatten(_keys, false, false);
  var index = _keys.length;
  if (index < 1) throw new Error('bindAll must be passed function names');
  while (index--) {
    var key = _keys[index];
    obj[key] = bind(obj[key], obj);
  }
});

// Memoize an expensive function by storing its results.
function memoize(func, hasher) {
  var memoize = function(key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!_has(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
}

// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
var delay = restArguments(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
});

// Defers a function, scheduling it to run after the current call stack has
// cleared.
var defer = partial(delay, _, 1);

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var _now = now();
    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout, result;

  var later = function(context, args) {
    timeout = null;
    if (args) result = func.apply(context, args);
  };

  var debounced = restArguments(function(args) {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
      timeout = delay(later, wait, this, args);
    }

    return result;
  });

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}

// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
function wrap(func, wrapper) {
  return partial(wrapper, func);
}

// Returns a negated version of the passed-in predicate.
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}

// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
}

// Returns a function that will only be executed on and after the Nth call.
function after(times, func) {
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}

// Returns a function that will only be executed up to (but not including) the Nth call.
function before(times, func) {
  var memo;
  return function() {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }
    if (times <= 1) func = null;
    return memo;
  };
}

// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
var once = partial(before, 2);

// Object Functions
// ----------------

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

function collectNonEnumProps(obj, _keys) {
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = isFunction(constructor) && constructor.prototype || ObjProto;

  // Constructor is a special case.
  var prop = 'constructor';
  if (_has(obj, prop) && !contains(_keys, prop)) _keys.push(prop);

  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !contains(_keys, prop)) {
      _keys.push(prop);
    }
  }
}

// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
function keys(obj) {
  if (!isObject(obj)) return [];
  if (nativeKeys) return nativeKeys(obj);
  var _keys = [];
  for (var key in obj) if (_has(obj, key)) _keys.push(key);
  // Ahem, IE < 9.
  if (hasEnumBug) collectNonEnumProps(obj, _keys);
  return _keys;
}

// Retrieve all the property names of an object.
function allKeys(obj) {
  if (!isObject(obj)) return [];
  var _keys = [];
  for (var key in obj) _keys.push(key);
  // Ahem, IE < 9.
  if (hasEnumBug) collectNonEnumProps(obj, _keys);
  return _keys;
}

// Retrieve the values of an object's properties.
function values(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[_keys[i]];
  }
  return values;
}

// Returns the results of applying the iteratee to each element of the object.
// In contrast to map it returns an object.
function mapObject(obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  var _keys = keys(obj),
      length = _keys.length,
      results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}

// Convert an object into a list of `[key, value]` pairs.
// The opposite of object.
function pairs(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var pairs = Array(length);
  for (var i = 0; i < length; i++) {
    pairs[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs;
}

// Invert the keys and values of an object. The values must be serializable.
function invert(obj) {
  var result = {};
  var _keys = keys(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result[obj[_keys[i]]] = _keys[i];
  }
  return result;
}

// Return a sorted list of the function names available on the object.
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (isFunction(obj[key])) names.push(key);
  }
  return names.sort();
}


// An internal function for creating assigner functions.
function createAssigner(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          _keys = keysFunc(source),
          l = _keys.length;
      for (var i = 0; i < l; i++) {
        var key = _keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
}

// Extend a given object with all the properties in passed-in object(s).
var extend = createAssigner(allKeys);

// Assigns a given object with all the own properties in the passed-in object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
var extendOwn = createAssigner(keys);


// Returns the first key on an object that passes a predicate test.
function findKey(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = keys(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
}

// Internal pick helper function to determine if `obj` has key `key`.
function keyInObj(value, key, obj) {
  return key in obj;
}

// Return a copy of the object only containing the whitelisted properties.
var pick = restArguments(function(obj, _keys) {
  var result = {}, iteratee = _keys[0];
  if (obj == null) return result;
  if (isFunction(iteratee)) {
    if (_keys.length > 1) iteratee = optimizeCb(iteratee, _keys[1]);
    _keys = allKeys(obj);
  } else {
    iteratee = keyInObj;
    _keys = _flatten(_keys, false, false);
    obj = Object(obj);
  }
  for (var i = 0, length = _keys.length; i < length; i++) {
    var key = _keys[i];
    var value = obj[key];
    if (iteratee(value, key, obj)) result[key] = value;
  }
  return result;
});

// Return a copy of the object without the blacklisted properties.
var omit = restArguments(function(obj, _keys) {
  var iteratee = _keys[0], context;
  if (isFunction(iteratee)) {
    iteratee = negate(iteratee);
    if (_keys.length > 1) context = _keys[1];
  } else {
    _keys = map(_flatten(_keys, false, false), String);
    iteratee = function(value, key) {
      return !contains(_keys, key);
    };
  }
  return pick(obj, iteratee, context);
});

// Fill in a given object with default properties.
var defaults = createAssigner(allKeys, true);

// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
function create(prototype, props) {
  var result = baseCreate(prototype);
  if (props) extendOwn(result, props);
  return result;
}

// Create a (shallow-cloned) duplicate of an object.
function clone(obj) {
  if (!isObject(obj)) return obj;
  return isArray(obj) ? obj.slice() : extend({}, obj);
}

// Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}

// Returns whether an object has a given set of `key:value` pairs.
function isMatch(object, attrs) {
  var _keys = keys(attrs), length = _keys.length;
  if (object == null) return !length;
  var obj = Object(object);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}


// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](https://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // `null` or `undefined` only equal to itself (strict comparison).
  if (a == null || b == null) return false;
  // `NaN`s are equivalent, but non-reflexive.
  if (a !== a) return b !== b;
  // Exhaust primitive checks
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
  return deepEq(a, b, aStack, bStack);
}

// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  if (a instanceof _) a = a._wrapped;
  if (b instanceof _) b = b._wrapped;
  // Compare `[[Class]]` names.
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;
  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case '[object RegExp]':
    // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return '' + a === '' + b;
    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b;
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
    case '[object Symbol]':
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
  }

  var areArrays = className === '[object Array]';
  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false;

    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor &&
                             isFunction(bCtor) && bCtor instanceof bCtor)
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  }

  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);

  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false;
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var _keys = keys(a), key;
    length = _keys.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if (keys(b).length !== length) return false;
    while (length--) {
      // Deep compare each member
      key = _keys[length];
      if (!(_has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
}

// Perform a deep comparison to check if two objects are equal.
function isEqual(a, b) {
  return eq(a, b);
}

// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
function isEmpty(obj) {
  if (obj == null) return true;
  if (isArrayLike(obj) && (isArray(obj) || isString(obj) || isArguments(obj))) return obj.length === 0;
  return keys(obj).length === 0;
}

// Is a given value a DOM element?
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}

// Internal function for creating a toString-based type tester.
function tagTester(name) {
  return function(obj) {
    return toString.call(obj) === '[object ' + name + ']';
  };
}

// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
var isArray = nativeIsArray || tagTester('Array');

// Is a given variable an object?
function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}

// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
var isArguments = tagTester('Arguments');
var isFunction = tagTester('Function');
var isString = tagTester('String');
var isNumber = tagTester('Number');
var isDate = tagTester('Date');
var isRegExp = tagTester('RegExp');
var isError = tagTester('Error');
var isSymbol = tagTester('Symbol');
var isMap = tagTester('Map');
var isWeakMap = tagTester('WeakMap');
var isSet = tagTester('Set');
var isWeakSet = tagTester('WeakSet');

// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
(function() {
  if (!isArguments(arguments)) {
    isArguments = function(obj) {
      return _has(obj, 'callee');
    };
  }
}());

// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
// IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
var nodelist = root.document && root.document.childNodes;
if ( true && typeof Int8Array != 'object' && typeof nodelist != 'function') {
  isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };
}

// Is a given object a finite number?
function isFinite(obj) {
  return !isSymbol(obj) && _isFinite(obj) && !_isNaN(parseFloat(obj));
}

// Is the given value `NaN`?
function isNaN(obj) {
  return isNumber(obj) && _isNaN(obj);
}

// Is a given value a boolean?
function isBoolean(obj) {
  return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
}

// Is a given value equal to null?
function isNull(obj) {
  return obj === null;
}

// Is a given variable undefined?
function isUndefined(obj) {
  return obj === void 0;
}

// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
function has(obj, path) {
  if (!isArray(path)) {
    return _has(obj, path);
  }
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (obj == null || !hasOwnProperty.call(obj, key)) {
      return false;
    }
    obj = obj[key];
  }
  return !!length;
}

// Utility Functions
// -----------------

// Keep the identity function around for default iteratees.
function identity(value) {
  return value;
}

// Predicate-generating functions. Often useful outside of Underscore.
function constant(value) {
  return function() {
    return value;
  };
}

function noop(){}

// Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indexes.
function property(path) {
  if (!isArray(path)) {
    return shallowProperty(path);
  }
  return function(obj) {
    return deepGet(obj, path);
  };
}

// Generates a function for a given object that returns a given property.
function propertyOf(obj) {
  if (obj == null) {
    return function(){};
  }
  return function(path) {
    return !isArray(path) ? obj[path] : deepGet(obj, path);
  };
}

// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
function matcher(attrs) {
  attrs = extendOwn({}, attrs);
  return function(obj) {
    return isMatch(obj, attrs);
  };
}


// Run a function **n** times.
function times(n, iteratee, context) {
  var accum = Array(Math.max(0, n));
  iteratee = optimizeCb(iteratee, context, 1);
  for (var i = 0; i < n; i++) accum[i] = iteratee(i);
  return accum;
}

// Return a random integer between min and max (inclusive).
function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

// A (possibly faster) way to get the current timestamp as an integer.
var now = Date.now || function() {
  return new Date().getTime();
};

// List of HTML entities for escaping.
var escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
};
var unescapeMap = invert(escapeMap);

// Functions for escaping and unescaping strings to/from HTML interpolation.
function createEscaper(map) {
  var escaper = function(match) {
    return map[match];
  };
  // Regexes for identifying a key that needs to be escaped.
  var source = '(?:' + keys(map).join('|') + ')';
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, 'g');
  return function(string) {
    string = string == null ? '' : '' + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}
var escape = createEscaper(escapeMap);
var unescape = createEscaper(unescapeMap);

// Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.
function result(obj, path, fallback) {
  if (!isArray(path)) path = [path];
  var length = path.length;
  if (!length) {
    return isFunction(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length; // Ensure we don't continue iterating.
    }
    obj = isFunction(prop) ? prop.call(obj) : prop;
  }
  return obj;
}

// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
}

// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
var templateSettings = _.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};

// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch = /(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes = {
  "'": "'",
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

var escapeChar = function(match) {
  return '\\' + escapes[match];
};

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
function template(text, settings, oldSettings) {
  if (!settings && oldSettings) settings = oldSettings;
  settings = defaults({}, settings, _.templateSettings);

  // Combine delimiters into one regular expression via alternation.
  var matcher = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join('|') + '|$', 'g');

  // Compile the template source, escaping string literals appropriately.
  var index = 0;
  var source = "__p+='";
  text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;

    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }

    // Adobe VMs need the match returned to produce the correct offset.
    return match;
  });
  source += "';\n";

  // If a variable is not specified, place data values in local scope.
  if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

  source = "var __t,__p='',__j=Array.prototype.join," +
    "print=function(){__p+=__j.call(arguments,'');};\n" +
    source + 'return __p;\n';

  var render;
  try {
    render = new Function(settings.variable || 'obj', '_', source);
  } catch (e) {
    e.source = source;
    throw e;
  }

  var template = function(data) {
    return render.call(this, data, _);
  };

  // Provide the compiled source as a convenience for precompilation.
  var argument = settings.variable || 'obj';
  template.source = 'function(' + argument + '){\n' + source + '}';

  return template;
}

// Add a "chain" function. Start chaining a wrapped Underscore object.
function chain(obj) {
  var instance = _(obj);
  instance._chain = true;
  return instance;
}

// OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.

// Helper function to continue chaining intermediate results.
function chainResult(instance, obj) {
  return instance._chain ? _(obj).chain() : obj;
}

// Add your own custom functions to the Underscore object.
function mixin(obj) {
  each(functions(obj), function(name) {
    var func = _[name] = obj[name];
    _.prototype[name] = function() {
      var args = [this._wrapped];
      push.apply(args, arguments);
      return chainResult(this, func.apply(_, args));
    };
  });
  return _;
}

// Add all mutator Array functions to the wrapper.
each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
  var method = ArrayProto[name];
  _.prototype[name] = function() {
    var obj = this._wrapped;
    method.apply(obj, arguments);
    if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
    return chainResult(this, obj);
  };
});

// Add all accessor Array functions to the wrapper.
each(['concat', 'join', 'slice'], function(name) {
  var method = ArrayProto[name];
  _.prototype[name] = function() {
    return chainResult(this, method.apply(this._wrapped, arguments));
  };
});

// Extracts the result from a wrapped and chained object.
_.prototype.value = function() {
  return this._wrapped;
};

// Provide unwrapping proxy for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

_.prototype.toString = function() {
  return String(this._wrapped);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/workerpool/dist/workerpool.js":
/*!****************************************************!*\
  !*** ./node_modules/workerpool/dist/workerpool.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, __dirname) {/**
 * workerpool.js
 * https://github.com/josdejong/workerpool
 *
 * Offload tasks to a pool of workers on node.js and in the browser.
 *
 * @version 6.0.0
 * @date    2020-05-13
 *
 * @license
 * Copyright (C) 2014-2020 Jos de Jong <wjosdejong@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var requireFoolWebpack = __webpack_require__(2);

// source: https://github.com/flexdinesh/browser-or-node
var isNode = function (nodeProcess) {
  return (
    typeof nodeProcess !== 'undefined' &&
    nodeProcess.versions != null &&
    nodeProcess.versions.node != null
  );
}
module.exports.isNode = isNode

// determines the JavaScript platform: browser or node
module.exports.platform = typeof process !== 'undefined' && isNode(process)
  ? 'node'
  : 'browser';

// determines whether the code is running in main thread or not
// note that in node.js we have to check both worker_thread and child_process
var worker_threads = tryRequireFoolWebpack('worker_threads');
module.exports.isMainThread = module.exports.platform === 'node'
  ? ((!worker_threads || worker_threads.isMainThread) && !process.connected)
  : typeof Window !== 'undefined';

// determines the number of cpus available
module.exports.cpus = module.exports.platform === 'browser'
  ? self.navigator.hardwareConcurrency
  : requireFoolWebpack('os').cpus().length;

function tryRequireFoolWebpack (module) {
  try {
    return requireFoolWebpack(module);
  } catch(err) {
    return null
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Promise
 *
 * Inspired by https://gist.github.com/RubaXa/8501359 from RubaXa <trash@rubaxa.org>
 *
 * @param {Function} handler   Called as handler(resolve: Function, reject: Function)
 * @param {Promise} [parent]   Parent promise for propagation of cancel and timeout
 */
function Promise(handler, parent) {
  var me = this;

  if (!(this instanceof Promise)) {
    throw new SyntaxError('Constructor must be called with the new operator');
  }

  if (typeof handler !== 'function') {
    throw new SyntaxError('Function parameter handler(resolve, reject) missing');
  }

  var _onSuccess = [];
  var _onFail = [];

  // status
  this.resolved = false;
  this.rejected = false;
  this.pending = true;

  /**
   * Process onSuccess and onFail callbacks: add them to the queue.
   * Once the promise is resolve, the function _promise is replace.
   * @param {Function} onSuccess
   * @param {Function} onFail
   * @private
   */
  var _process = function (onSuccess, onFail) {
    _onSuccess.push(onSuccess);
    _onFail.push(onFail);
  };

  /**
   * Add an onSuccess callback and optionally an onFail callback to the Promise
   * @param {Function} onSuccess
   * @param {Function} [onFail]
   * @returns {Promise} promise
   */
  this.then = function (onSuccess, onFail) {
    return new Promise(function (resolve, reject) {
      var s = onSuccess ? _then(onSuccess, resolve, reject) : resolve;
      var f = onFail    ? _then(onFail,    resolve, reject) : reject;

      _process(s, f);
    }, me);
  };

  /**
   * Resolve the promise
   * @param {*} result
   * @type {Function}
   */
  var _resolve = function (result) {
    // update status
    me.resolved = true;
    me.rejected = false;
    me.pending = false;

    _onSuccess.forEach(function (fn) {
      fn(result);
    });

    _process = function (onSuccess, onFail) {
      onSuccess(result);
    };

    _resolve = _reject = function () { };

    return me;
  };

  /**
   * Reject the promise
   * @param {Error} error
   * @type {Function}
   */
  var _reject = function (error) {
    // update status
    me.resolved = false;
    me.rejected = true;
    me.pending = false;

    _onFail.forEach(function (fn) {
      fn(error);
    });

    _process = function (onSuccess, onFail) {
      onFail(error);
    };

    _resolve = _reject = function () { }

    return me;
  };

  /**
   * Cancel te promise. This will reject the promise with a CancellationError
   * @returns {Promise} self
   */
  this.cancel = function () {
    if (parent) {
      parent.cancel();
    }
    else {
      _reject(new CancellationError());
    }

    return me;
  };

  /**
   * Set a timeout for the promise. If the promise is not resolved within
   * the time, the promise will be cancelled and a TimeoutError is thrown.
   * If the promise is resolved in time, the timeout is removed.
   * @param {number} delay     Delay in milliseconds
   * @returns {Promise} self
   */
  this.timeout = function (delay) {
    if (parent) {
      parent.timeout(delay);
    }
    else {
      var timer = setTimeout(function () {
        _reject(new TimeoutError('Promise timed out after ' + delay + ' ms'));
      }, delay);

      me.always(function () {
        clearTimeout(timer);
      });
    }

    return me;
  };

  // attach handler passing the resolve and reject functions
  handler(function (result) {
    _resolve(result);
  }, function (error) {
    _reject(error);
  });
}

/**
 * Execute given callback, then call resolve/reject based on the returned result
 * @param {Function} callback
 * @param {Function} resolve
 * @param {Function} reject
 * @returns {Function}
 * @private
 */
function _then(callback, resolve, reject) {
  return function (result) {
    try {
      var res = callback(result);
      if (res && typeof res.then === 'function' && typeof res['catch'] === 'function') {
        // method returned a promise
        res.then(resolve, reject);
      }
      else {
        resolve(res);
      }
    }
    catch (error) {
      reject(error);
    }
  }
}

/**
 * Add an onFail callback to the Promise
 * @param {Function} onFail
 * @returns {Promise} promise
 */
Promise.prototype['catch'] = function (onFail) {
  return this.then(null, onFail);
};

// TODO: add support for Promise.catch(Error, callback)
// TODO: add support for Promise.catch(Error, Error, callback)

/**
 * Execute given callback when the promise either resolves or rejects.
 * @param {Function} fn
 * @returns {Promise} promise
 */
Promise.prototype.always = function (fn) {
  return this.then(fn, fn);
};

/**
 * Create a promise which resolves when all provided promises are resolved,
 * and fails when any of the promises resolves.
 * @param {Promise[]} promises
 * @returns {Promise} promise
 */
Promise.all = function (promises){
  return new Promise(function (resolve, reject) {
    var remaining = promises.length,
        results = [];

    if (remaining) {
      promises.forEach(function (p, i) {
        p.then(function (result) {
          results[i] = result;
          remaining--;
          if (remaining == 0) {
            resolve(results);
          }
        }, function (error) {
          remaining = 0;
          reject(error);
        });
      });
    }
    else {
      resolve(results);
    }
  });
};

/**
 * Create a promise resolver
 * @returns {{promise: Promise, resolve: Function, reject: Function}} resolver
 */
Promise.defer = function () {
  var resolver = {};

  resolver.promise = new Promise(function (resolve, reject) {
    resolver.resolve = resolve;
    resolver.reject = reject;
  });

  return resolver;
};

/**
 * Create a cancellation error
 * @param {String} [message]
 * @extends Error
 */
function CancellationError(message) {
  this.message = message || 'promise cancelled';
  this.stack = (new Error()).stack;
}

CancellationError.prototype = new Error();
CancellationError.prototype.constructor = Error;
CancellationError.prototype.name = 'CancellationError';

Promise.CancellationError = CancellationError;


/**
 * Create a timeout error
 * @param {String} [message]
 * @extends Error
 */
function TimeoutError(message) {
  this.message = message || 'timeout exceeded';
  this.stack = (new Error()).stack;
}

TimeoutError.prototype = new Error();
TimeoutError.prototype.constructor = Error;
TimeoutError.prototype.name = 'TimeoutError';

Promise.TimeoutError = TimeoutError;


module.exports = Promise;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// source of inspiration: https://github.com/sindresorhus/require-fool-webpack
var requireFoolWebpack = eval(
    'typeof require !== \'undefined\' ' +
    '? require ' +
    ': function (module) { throw new Error(\'Module " + module + " not found.\') }'
);

module.exports = requireFoolWebpack;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var environment = __webpack_require__(0);

/**
 * Create a new worker pool
 * @param {string} [script]
 * @param {WorkerPoolOptions} [options]
 * @returns {Pool} pool
 */
exports.pool = function pool(script, options) {
  var Pool = __webpack_require__(4);

  return new Pool(script, options);
};

/**
 * Create a worker and optionally register a set of methods to the worker.
 * @param {Object} [methods]
 */
exports.worker = function worker(methods) {
  var worker = __webpack_require__(8);
  worker.add(methods);
};

/**
 * Create a promise.
 * @type {Promise} promise
 */
exports.Promise = __webpack_require__(1);

exports.platform = environment.platform;
exports.isMainThread = environment.isMainThread;
exports.cpus = environment.cpus;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Promise = __webpack_require__(1);
var WorkerHandler = __webpack_require__(5);
var environment = __webpack_require__(0);
var DebugPortAllocator = __webpack_require__(7);
var DEBUG_PORT_ALLOCATOR = new DebugPortAllocator();
/**
 * A pool to manage workers
 * @param {String} [script]   Optional worker script
 * @param {WorkerPoolOptions} [options]  See docs
 * @constructor
 */
function Pool(script, options) {
  if (typeof script === 'string') {
    this.script = script || null;
  }
  else {
    this.script = null;
    options = script;
  }

  this.workers = [];  // queue with all workers
  this.tasks = [];    // queue with tasks awaiting execution

  options = options || {};

  this.forkArgs = options.forkArgs || [];
  this.forkOpts = options.forkOpts || {};
  this.debugPortStart = (options.debugPortStart || 43210);
  this.nodeWorker = options.nodeWorker;
  this.workerType = options.workerType || options.nodeWorker || 'auto'
  this.maxQueueSize = options.maxQueueSize || Infinity;

  // configuration
  if (options && 'maxWorkers' in options) {
    validateMaxWorkers(options.maxWorkers);
    this.maxWorkers = options.maxWorkers;
  }
  else {
    this.maxWorkers = Math.max((environment.cpus || 4) - 1, 1);
  }

  if (options && 'minWorkers' in options) {
    if(options.minWorkers === 'max') {
      this.minWorkers = this.maxWorkers;
    } else {
      validateMinWorkers(options.minWorkers);
      this.minWorkers = options.minWorkers;
      this.maxWorkers = Math.max(this.minWorkers, this.maxWorkers);     // in case minWorkers is higher than maxWorkers
    }
    this._ensureMinWorkers();
  }

  this._boundNext = this._next.bind(this);


  if (this.workerType === 'thread') {
    WorkerHandler.ensureWorkerThreads();
  }
}


/**
 * Execute a function on a worker.
 *
 * Example usage:
 *
 *   var pool = new Pool()
 *
 *   // call a function available on the worker
 *   pool.exec('fibonacci', [6])
 *
 *   // offload a function
 *   function add(a, b) {
 *     return a + b
 *   };
 *   pool.exec(add, [2, 4])
 *       .then(function (result) {
 *         console.log(result); // outputs 6
 *       })
 *       .catch(function(error) {
 *         console.log(error);
 *       });
 *
 * @param {String | Function} method  Function name or function.
 *                                    If `method` is a string, the corresponding
 *                                    method on the worker will be executed
 *                                    If `method` is a Function, the function
 *                                    will be stringified and executed via the
 *                                    workers built-in function `run(fn, args)`.
 * @param {Array} [params]  Function arguments applied when calling the function
 * @return {Promise.<*, Error>} result
 */
Pool.prototype.exec = function (method, params) {
  // validate type of arguments
  if (params && !Array.isArray(params)) {
    throw new TypeError('Array expected as argument "params"');
  }

  if (typeof method === 'string') {
    var resolver = Promise.defer();

    if (this.tasks.length >= this.maxQueueSize) {
      throw new Error('Max queue size of ' + this.maxQueueSize + ' reached');
    }

    // add a new task to the queue
    var tasks = this.tasks;
    var task = {
      method:  method,
      params:  params,
      resolver: resolver,
      timeout: null
    };
    tasks.push(task);

    // replace the timeout method of the Promise with our own,
    // which starts the timer as soon as the task is actually started
    var originalTimeout = resolver.promise.timeout;
    resolver.promise.timeout = function timeout (delay) {
      if (tasks.indexOf(task) !== -1) {
        // task is still queued -> start the timer later on
        task.timeout = delay;
        return resolver.promise;
      }
      else {
        // task is already being executed -> start timer immediately
        return originalTimeout.call(resolver.promise, delay);
      }
    };

    // trigger task execution
    this._next();

    return resolver.promise;
  }
  else if (typeof method === 'function') {
    // send stringified function and function arguments to worker
    return this.exec('run', [String(method), params]);
  }
  else {
    throw new TypeError('Function or string expected as argument "method"');
  }
};

/**
 * Create a proxy for current worker. Returns an object containing all
 * methods available on the worker. The methods always return a promise.
 *
 * @return {Promise.<Object, Error>} proxy
 */
Pool.prototype.proxy = function () {
  if (arguments.length > 0) {
    throw new Error('No arguments expected');
  }

  var pool = this;
  return this.exec('methods')
      .then(function (methods) {
        var proxy = {};

        methods.forEach(function (method) {
          proxy[method] = function () {
            return pool.exec(method, Array.prototype.slice.call(arguments));
          }
        });

        return proxy;
      });
};

/**
 * Creates new array with the results of calling a provided callback function
 * on every element in this array.
 * @param {Array} array
 * @param {function} callback  Function taking two arguments:
 *                             `callback(currentValue, index)`
 * @return {Promise.<Array>} Returns a promise which resolves  with an Array
 *                           containing the results of the callback function
 *                           executed for each of the array elements.
 */
/* TODO: implement map
Pool.prototype.map = function (array, callback) {
};
*/

/**
 * Grab the first task from the queue, find a free worker, and assign the
 * worker to the task.
 * @protected
 */
Pool.prototype._next = function () {
  if (this.tasks.length > 0) {
    // there are tasks in the queue

    // find an available worker
    var worker = this._getWorker();
    if (worker) {
      // get the first task from the queue
      var me = this;
      var task = this.tasks.shift();

      // check if the task is still pending (and not cancelled -> promise rejected)
      if (task.resolver.promise.pending) {
        // send the request to the worker
        var promise = worker.exec(task.method, task.params, task.resolver)
          .then(me._boundNext)
          .catch(function () {
            // if the worker crashed and terminated, remove it from the pool
            if (worker.terminated) {
              me._removeWorker(worker);
              // If minWorkers set, spin up new workers to replace the crashed ones
              me._ensureMinWorkers();
            }
            me._next(); // trigger next task in the queue
          });

        // start queued timer now
        if (typeof task.timeout === 'number') {
          promise.timeout(task.timeout);
        }
      } else {
        // The task taken was already complete (either rejected or resolved), so just trigger next task in the queue
        me._next();
      }
    }
  }
};

/**
 * Get an available worker. If no worker is available and the maximum number
 * of workers isn't yet reached, a new worker will be created and returned.
 * If no worker is available and the maximum number of workers is reached,
 * null will be returned.
 *
 * @return {WorkerHandler | null} worker
 * @private
 */
Pool.prototype._getWorker = function() {
  // find a non-busy worker
  var workers = this.workers;
  for (var i = 0; i < workers.length; i++) {
    var worker = workers[i];
    if (worker.busy() === false) {
      return worker;
    }
  }

  if (workers.length < this.maxWorkers) {
    // create a new worker
    worker = this._createWorkerHandler();
    workers.push(worker);
    return worker;
  }

  return null;
};

/**
 * Remove a worker from the pool. For example after a worker terminated for
 * whatever reason
 * @param {WorkerHandler} worker
 * @protected
 */
Pool.prototype._removeWorker = function(worker) {
  DEBUG_PORT_ALLOCATOR.releasePort(worker.debugPort)
  // terminate the worker (if not already terminated)
  worker.terminate();
  this._removeWorkerFromList(worker);
};

/**
 * Remove a worker from the pool list.
 * @param {WorkerHandler} worker
 * @protected
 */
Pool.prototype._removeWorkerFromList = function(worker) {
  // remove from the list with workers
  var index = this.workers.indexOf(worker);
  if (index !== -1) {
    this.workers.splice(index, 1);
  }
};

/**
 * Close all active workers. Tasks currently being executed will be finished first.
 * @param {boolean} [force=false]   If false (default), the workers are terminated
 *                                  after finishing all tasks currently in
 *                                  progress. If true, the workers will be
 *                                  terminated immediately.
 * @param {number} [timeout]        If provided and non-zero, worker termination promise will be rejected
 *                                  after timeout if worker process has not been terminated.
 * @return {Promise.<void, Error>}
 */
Pool.prototype.terminate = function (force, timeout) {
  // cancel any pending tasks
  this.tasks.forEach(function (task) {
    task.resolver.reject(new Error('Pool terminated'));
  });
  this.tasks.length = 0;

  var f = function (worker) {
    this._removeWorkerFromList(worker);
  };
  var removeWorker = f.bind(this);

  var promises = [];
  var workers = this.workers.slice();
  workers.forEach(function (worker) {
    var termPromise = worker.terminateAndNotify(force, timeout)
      .then(removeWorker);
    promises.push(termPromise);
  });
  return Promise.all(promises);
};

/**
 * Retrieve statistics on tasks and workers.
 * @return {{totalWorkers: number, busyWorkers: number, idleWorkers: number, pendingTasks: number, activeTasks: number}} Returns an object with statistics
 */
Pool.prototype.stats = function () {
  var totalWorkers = this.workers.length;
  var busyWorkers = this.workers.filter(function (worker) {
    return worker.busy();
  }).length;

  return {
    totalWorkers:  totalWorkers,
    busyWorkers:   busyWorkers,
    idleWorkers:   totalWorkers - busyWorkers,

    pendingTasks:  this.tasks.length,
    activeTasks:   busyWorkers
  };
};

/**
 * Ensures that a minimum of minWorkers is up and running
 * @protected
 */
Pool.prototype._ensureMinWorkers = function() {
  if (this.minWorkers) {
    for(var i = this.workers.length; i < this.minWorkers; i++) {
      this.workers.push(this._createWorkerHandler());
    }
  }
};

/**
 * Helper function to create a new WorkerHandler and pass all options.
 * @return {WorkerHandler}
 * @private
 */
Pool.prototype._createWorkerHandler = function () {
  return new WorkerHandler(this.script, {
    forkArgs: this.forkArgs,
    forkOpts: this.forkOpts,
    debugPort: DEBUG_PORT_ALLOCATOR.nextAvailableStartingAt(this.debugPortStart),
    workerType: this.workerType
  });
}

/**
 * Ensure that the maxWorkers option is an integer >= 1
 * @param {*} maxWorkers
 * @returns {boolean} returns true maxWorkers has a valid value
 */
function validateMaxWorkers(maxWorkers) {
  if (!isNumber(maxWorkers) || !isInteger(maxWorkers) || maxWorkers < 1) {
    throw new TypeError('Option maxWorkers must be an integer number >= 1');
  }
}

/**
 * Ensure that the minWorkers option is an integer >= 0
 * @param {*} minWorkers
 * @returns {boolean} returns true when minWorkers has a valid value
 */
function validateMinWorkers(minWorkers) {
  if (!isNumber(minWorkers) || !isInteger(minWorkers) || minWorkers < 0) {
    throw new TypeError('Option minWorkers must be an integer number >= 0');
  }
}

/**
 * Test whether a variable is a number
 * @param {*} value
 * @returns {boolean} returns true when value is a number
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Test whether a number is an integer
 * @param {number} value
 * @returns {boolean} Returns true if value is an integer
 */
function isInteger(value) {
  return Math.round(value) == value;
}

module.exports = Pool;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(1);
var environment = __webpack_require__(0);
var requireFoolWebpack = __webpack_require__(2);

function ensureWorkerThreads() {
  var WorkerThreads = tryRequireWorkerThreads()
  if (!WorkerThreads) {
    throw new Error('WorkerPool: workerType = \'thread\' is not supported, Node >= 11.7.0 required')
  }

  return WorkerThreads;
}

// check whether Worker is supported by the browser
function ensureWebWorker() {
  // Workaround for a bug in PhantomJS (Or QtWebkit): https://github.com/ariya/phantomjs/issues/14534
  if (typeof Worker !== 'function' && (typeof Worker !== 'object' || typeof Worker.prototype.constructor !== 'function')) {
    throw new Error('WorkerPool: Web Workers not supported');
  }
}

function tryRequireWorkerThreads() {
  try {
    return requireFoolWebpack('worker_threads');
  } catch(error) {
    if (typeof error === 'object' && error !== null && error.code === 'MODULE_NOT_FOUND') {
      // no worker_threads available (old version of node.js)
      return null;
    } else {
      throw error;
    }
  }
}

// get the default worker script
function getDefaultWorker() {
  if (environment.platform === 'browser') {
    // test whether the browser supports all features that we need
    if (typeof Blob === 'undefined') {
      throw new Error('Blob not supported by the browser');
    }
    if (!window.URL || typeof window.URL.createObjectURL !== 'function') {
      throw new Error('URL.createObjectURL not supported by the browser');
    }

    // use embedded worker.js
    var blob = new Blob([__webpack_require__(6)], {type: 'text/javascript'});
    return window.URL.createObjectURL(blob);
  }
  else {
    // use external worker.js in current directory
    return __dirname + '/worker.js';
  }
}

function setupWorker(script, options) {
  if (options.workerType === 'web') { // browser only
    ensureWebWorker();
    return setupBrowserWorker(script, Worker);
  } else if (options.workerType === 'thread') { // node.js only
    WorkerThreads = ensureWorkerThreads();
    return setupWorkerThreadWorker(script, WorkerThreads);
  } else if (options.workerType === 'process' || !options.workerType) { // node.js only
    return setupProcessWorker(script, resolveForkOptions(options), requireFoolWebpack('child_process'));
  } else { // options.workerType === 'auto' or undefined
    if (environment.platform === 'browser') {
      ensureWebWorker();
      return setupBrowserWorker(script, Worker);
    }
    else { // environment.platform === 'node'
      var WorkerThreads = tryRequireWorkerThreads();
      if (WorkerThreads) {
        return setupWorkerThreadWorker(script, WorkerThreads);
      } else {
        return setupProcessWorker(script, resolveForkOptions(options), requireFoolWebpack('child_process'));
      }
    }
  }
}

function setupBrowserWorker(script, Worker) {
  // create the web worker
  var worker = new Worker(script);

  worker.isBrowserWorker = true;
  // add node.js API to the web worker
  worker.on = function (event, callback) {
    this.addEventListener(event, function (message) {
      callback(message.data);
    });
  };
  worker.send = function (message) {
    this.postMessage(message);
  };
  return worker;
}

function setupWorkerThreadWorker(script, WorkerThreads) {
  var worker = new WorkerThreads.Worker(script, {
    stdout: false, // automatically pipe worker.STDOUT to process.STDOUT
    stderr: false  // automatically pipe worker.STDERR to process.STDERR
  });
  worker.isWorkerThread = true;
  // make the worker mimic a child_process
  worker.send = function(message) {
    this.postMessage(message);
  };

  worker.kill = function() {
    this.terminate();
  };

  worker.disconnect = function() {
    this.terminate();
  };

  return worker;
}

function setupProcessWorker(script, options, child_process) {
  // no WorkerThreads, fallback to sub-process based workers
  var worker = child_process.fork(
    script,
    options.forkArgs,
    options.forkOpts
  );

  worker.isChildProcess = true;
  return worker;
}

// add debug flags to child processes if the node inspector is active
function resolveForkOptions(opts) {
  opts = opts || {};

  var processExecArgv = process.execArgv.join(' ');
  var inspectorActive = processExecArgv.indexOf('--inspect') !== -1;
  var debugBrk = processExecArgv.indexOf('--debug-brk') !== -1;

  var execArgv = [];
  if (inspectorActive) {
    execArgv.push('--inspect=' + opts.debugPort);

    if (debugBrk) {
      execArgv.push('--debug-brk');
    }
  }

  process.execArgv.forEach(function(arg) {
    if (arg.indexOf('--max-old-space-size') > -1) {
      execArgv.push(arg)
    }
  })

  return Object.assign({}, opts, {
    forkArgs: opts.forkArgs,
    forkOpts: Object.assign({}, opts.forkOpts, {
      execArgv: (opts.forkOpts && opts.forkOpts.execArgv || [])
      .concat(execArgv)
    })
  });
}

/**
 * Converts a serialized error to Error
 * @param {Object} obj Error that has been serialized and parsed to object
 * @return {Error} The equivalent Error.
 */
function objectToError (obj) {
  var temp = new Error('')
  var props = Object.keys(obj)

  for (var i = 0; i < props.length; i++) {
    temp[props[i]] = obj[props[i]]
  }

  return temp
}

/**
 * A WorkerHandler controls a single worker. This worker can be a child process
 * on node.js or a WebWorker in a browser environment.
 * @param {String} [script] If no script is provided, a default worker with a
 *                          function run will be created.
 * @param {WorkerPoolOptions} _options See docs
 * @constructor
 */
function WorkerHandler(script, _options) {
  var me = this;
  var options = _options || {};

  this.script = script || getDefaultWorker();
  this.worker = setupWorker(this.script, options);
  this.debugPort = options.debugPort;

  // The ready message is only sent if the worker.add method is called (And the default script is not used)
  if (!script) {
    this.worker.ready = true;
  }

  // queue for requests that are received before the worker is ready
  this.requestQueue = [];
  this.worker.on('message', function (response) {
    if (typeof response === 'string' && response === 'ready') {
      me.worker.ready = true;
      dispatchQueuedRequests();
    } else {
      // find the task from the processing queue, and run the tasks callback
      var id = response.id;
      var task = me.processing[id];
      if (task !== undefined) {
        // remove the task from the queue
        delete me.processing[id];

        // test if we need to terminate
        if (me.terminating === true) {
          // complete worker termination if all tasks are finished
          me.terminate();
        }

        // resolve the task's promise
        if (response.error) {
          task.resolver.reject(objectToError(response.error));
        }
        else {
          task.resolver.resolve(response.result);
        }
      }
    }
  });

  // reject all running tasks on worker error
  function onError(error) {
    me.terminated = true;
    if (me.terminating && me.terminationHandler) {
      me.terminationHandler(me);
    }
    me.terminating = false;

    for (var id in me.processing) {
      if (me.processing[id] !== undefined) {
        me.processing[id].resolver.reject(error);
      }
    }
    me.processing = Object.create(null);
  }

  // send all queued requests to worker
  function dispatchQueuedRequests()
  {
    me.requestQueue.forEach(me.worker.send.bind(me.worker));
    me.requestQueue = [];
  }

  var worker = this.worker;
  // listen for worker messages error and exit
  this.worker.on('error', onError);
  this.worker.on('exit', function (exitCode, signalCode) {
    var message = 'Workerpool Worker terminated Unexpectedly\n';

    message += '    exitCode: `' + exitCode + '`\n';
    message += '    signalCode: `' + signalCode + '`\n';

    message += '    workerpool.script: `' +  me.script + '`\n';
    message += '    spawnArgs: `' +  worker.spawnargs + '`\n';
    message += '    spawnfile: `' + worker.spawnfile + '`\n'

    message += '    stdout: `' + worker.stdout + '`\n'
    message += '    stderr: `' + worker.stderr + '`\n'

    onError(new Error(message));
  });

  this.processing = Object.create(null); // queue with tasks currently in progress

  this.terminating = false;
  this.terminated = false;
  this.terminationHandler = null;
  this.lastId = 0;
}

/**
 * Get a list with methods available on the worker.
 * @return {Promise.<String[], Error>} methods
 */
WorkerHandler.prototype.methods = function () {
  return this.exec('methods');
};

/**
 * Execute a method with given parameters on the worker
 * @param {String} method
 * @param {Array} [params]
 * @param {{resolve: Function, reject: Function}} [resolver]
 * @return {Promise.<*, Error>} result
 */
WorkerHandler.prototype.exec = function(method, params, resolver) {
  if (!resolver) {
    resolver = Promise.defer();
  }

  // generate a unique id for the task
  var id = ++this.lastId;

  // register a new task as being in progress
  this.processing[id] = {
    id: id,
    resolver: resolver
  };

  // build a JSON-RPC request
  var request = {
    id: id,
    method: method,
    params: params
  };

  if (this.terminated) {
    resolver.reject(new Error('Worker is terminated'));
  } else if (this.worker.ready) {
    // send the request to the worker
    this.worker.send(request);
  } else {
    this.requestQueue.push(request);
  }

  // on cancellation, force the worker to terminate
  var me = this;
  resolver.promise
    .catch(function (error) {
      if (error instanceof Promise.CancellationError || error instanceof Promise.TimeoutError) {
        // remove this task from the queue. It is already rejected (hence this
        // catch event), and else it will be rejected again when terminating
        delete me.processing[id];

        // terminate worker
        me.terminate(true);
      } else {
        throw error;
      }
    });

  return resolver.promise;
};

/**
 * Test whether the worker is working or not
 * @return {boolean} Returns true if the worker is busy
 */
WorkerHandler.prototype.busy = function () {
  return Object.keys(this.processing).length > 0;
};

/**
 * Terminate the worker.
 * @param {boolean} [force=false]   If false (default), the worker is terminated
 *                                  after finishing all tasks currently in
 *                                  progress. If true, the worker will be
 *                                  terminated immediately.
 * @param {function} [callback=null] If provided, will be called when process terminates.
 */
WorkerHandler.prototype.terminate = function (force, callback) {
  if (force) {
    // cancel all tasks in progress
    for (var id in this.processing) {
      if (this.processing[id] !== undefined) {
        this.processing[id].resolver.reject(new Error('Worker terminated'));
      }
    }
    this.processing = Object.create(null);
  }

  if (typeof callback === 'function') {
    this.terminationHandler = callback;
  }
  if (!this.busy()) {
    // all tasks are finished. kill the worker
    if (this.worker) {
      if (typeof this.worker.kill === 'function') {
        this.worker.kill();  // child process
      }
      else if (typeof this.worker.terminate === 'function') {
        this.worker.terminate(); // web worker
      }
      else {
        throw new Error('Failed to terminate worker');
      }
      this.worker = null;
    }
    this.terminating = false;
    this.terminated = true;
    if (this.terminationHandler) {
      this.terminationHandler(this);
    }
  }
  else {
    // we can't terminate immediately, there are still tasks being executed
    this.terminating = true;
  }
};

/**
 * Terminate the worker, returning a Promise that resolves when the termination has been done.
 * @param {boolean} [force=false]   If false (default), the worker is terminated
 *                                  after finishing all tasks currently in
 *                                  progress. If true, the worker will be
 *                                  terminated immediately.
 * @param {number} [timeout]        If provided and non-zero, worker termination promise will be rejected
 *                                  after timeout if worker process has not been terminated.
 * @return {Promise.<WorkerHandler, Error>}
 */
WorkerHandler.prototype.terminateAndNotify = function (force, timeout) {
  var resolver = Promise.defer();
  if (timeout) {
    resolver.promise.timeout = timeout;
  }
  this.terminate(force, function(worker) {
    resolver.resolve(worker);
  });
  return resolver.promise;
};

module.exports = WorkerHandler;
module.exports._tryRequireWorkerThreads = tryRequireWorkerThreads;
module.exports._setupProcessWorker = setupProcessWorker;
module.exports._setupBrowserWorker = setupBrowserWorker;
module.exports._setupWorkerThreadWorker = setupWorkerThreadWorker;
module.exports.ensureWorkerThreads = ensureWorkerThreads;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * embeddedWorker.js contains an embedded version of worker.js.
 * This file is automatically generated,
 * changes made in this file will be overwritten.
 */
module.exports = "!function(o){var n={};function t(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=o,t.c=n,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&\"object\"==typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,\"default\",{enumerable:!0,value:r}),2&e&&\"string\"!=typeof r)for(var n in r)t.d(o,n,function(e){return r[e]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,\"a\",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p=\"\",t(t.s=0)}([function(module,exports,__webpack_require__){var requireFoolWebpack=eval(\"typeof require !== 'undefined' ? require : function (module) { throw new Error('Module \\\" + module + \\\" not found.') }\"),worker={},WorkerThreads,parentPort;if(\"undefined\"!=typeof self&&\"function\"==typeof postMessage&&\"function\"==typeof addEventListener)worker.on=function(e,r){addEventListener(e,function(e){r(e.data)})},worker.send=function(e){postMessage(e)};else{if(\"undefined\"==typeof process)throw new Error(\"Script must be executed as a worker\");try{WorkerThreads=requireFoolWebpack(\"worker_threads\")}catch(e){if(\"object\"!=typeof e||null===e||\"MODULE_NOT_FOUND\"!==e.code)throw e}WorkerThreads&&null!==WorkerThreads.parentPort?(parentPort=WorkerThreads.parentPort,worker.send=parentPort.postMessage.bind(parentPort),worker.on=parentPort.on.bind(parentPort)):(worker.on=process.on.bind(process),worker.send=process.send.bind(process),worker.on(\"disconnect\",function(){process.exit(1)}))}function convertError(o){return Object.getOwnPropertyNames(o).reduce(function(e,r){return Object.defineProperty(e,r,{value:o[r],enumerable:!0})},{})}function isPromise(e){return e&&\"function\"==typeof e.then&&\"function\"==typeof e.catch}worker.methods={},worker.methods.run=function run(fn,args){var f=eval(\"(\"+fn+\")\");return f.apply(f,args)},worker.methods.methods=function(){return Object.keys(worker.methods)},worker.on(\"message\",function(r){try{var e=worker.methods[r.method];if(!e)throw new Error('Unknown method \"'+r.method+'\"');var o=e.apply(e,r.params);isPromise(o)?o.then(function(e){worker.send({id:r.id,result:e,error:null})}).catch(function(e){worker.send({id:r.id,result:null,error:convertError(e)})}):worker.send({id:r.id,result:o,error:null})}catch(e){worker.send({id:r.id,result:null,error:convertError(e)})}}),worker.register=function(e){if(e)for(var r in e)e.hasOwnProperty(r)&&(worker.methods[r]=e[r]);worker.send(\"ready\")},exports.add=worker.register}]);";


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MAX_PORTS = 65535;
module.exports = DebugPortAllocator;
function DebugPortAllocator() {
  this.ports = Object.create(null);
  this.length = 0;
}

DebugPortAllocator.prototype.nextAvailableStartingAt = function(starting) {
  while (this.ports[starting] === true) {
    starting++;
  }

  if (starting >= MAX_PORTS) {
    throw new Error('WorkerPool debug port limit reached: ' + starting + '>= ' + MAX_PORTS );
  }

  this.ports[starting] = true;
  this.length++;
  return starting;
};

DebugPortAllocator.prototype.releasePort = function(port) {
  delete this.ports[port];
  this.length--;
};



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * worker must be started as a child process or a web worker.
 * It listens for RPC messages from the parent process.
 */

// source of inspiration: https://github.com/sindresorhus/require-fool-webpack
var requireFoolWebpack = eval(
    'typeof require !== \'undefined\'' +
    ' ? require' +
    ' : function (module) { throw new Error(\'Module " + module + " not found.\') }'
);

// create a worker API for sending and receiving messages which works both on
// node.js and in the browser
var worker = {};
if (typeof self !== 'undefined' && typeof postMessage === 'function' && typeof addEventListener === 'function') {
  // worker in the browser
  worker.on = function (event, callback) {
    addEventListener(event, function (message) {
      callback(message.data);
    })
  };
  worker.send = function (message) {
    postMessage(message);
  };
}
else if (typeof process !== 'undefined') {
  // node.js

  var WorkerThreads;
  try {
    WorkerThreads = requireFoolWebpack('worker_threads');
  } catch(error) {
    if (typeof error === 'object' && error !== null && error.code === 'MODULE_NOT_FOUND') {
      // no worker_threads, fallback to sub-process based workers
    } else {
      throw error;
    }
  }

  if (WorkerThreads &&
    /* if there is a parentPort, we are in a WorkerThread */
    WorkerThreads.parentPort !== null) {
    var parentPort  = WorkerThreads.parentPort;
    worker.send = parentPort.postMessage.bind(parentPort);
    worker.on = parentPort.on.bind(parentPort);
  } else {
    worker.on = process.on.bind(process);
    worker.send = process.send.bind(process);
    // register disconnect handler only for subprocess worker to exit when parent is killed unexpectedly
    worker.on('disconnect', function () {
      process.exit(1);
    });
  }
}
else {
  throw new Error('Script must be executed as a worker');
}

function convertError(error) {
  return Object.getOwnPropertyNames(error).reduce(function(product, name) {
    return Object.defineProperty(product, name, {
	value: error[name],
	enumerable: true
    });
  }, {});
}

/**
 * Test whether a value is a Promise via duck typing.
 * @param {*} value
 * @returns {boolean} Returns true when given value is an object
 *                    having functions `then` and `catch`.
 */
function isPromise(value) {
  return value && (typeof value.then === 'function') && (typeof value.catch === 'function');
}

// functions available externally
worker.methods = {};

/**
 * Execute a function with provided arguments
 * @param {String} fn     Stringified function
 * @param {Array} [args]  Function arguments
 * @returns {*}
 */
worker.methods.run = function run(fn, args) {
  var f = eval('(' + fn + ')');
  return f.apply(f, args);
};

/**
 * Get a list with methods available on this worker
 * @return {String[]} methods
 */
worker.methods.methods = function methods() {
  return Object.keys(worker.methods);
};

worker.on('message', function (request) {
  try {
    var method = worker.methods[request.method];

    if (method) {
      // execute the function
      var result = method.apply(method, request.params);

      if (isPromise(result)) {
        // promise returned, resolve this and then return
        result
            .then(function (result) {
              worker.send({
                id: request.id,
                result: result,
                error: null
              });
            })
            .catch(function (err) {
              worker.send({
                id: request.id,
                result: null,
                error: convertError(err)
              });
            });
      }
      else {
        // immediate result
        worker.send({
          id: request.id,
          result: result,
          error: null
        });
      }
    }
    else {
      throw new Error('Unknown method "' + request.method + '"');
    }
  }
  catch (err) {
    worker.send({
      id: request.id,
      result: null,
      error: convertError(err)
    });
  }
});

/**
 * Register methods to the worker
 * @param {Object} methods
 */
worker.register = function (methods) {

  if (methods) {
    for (var name in methods) {
      if (methods.hasOwnProperty(name)) {
        worker.methods[name] = methods[name];
      }
    }
  }

  worker.send('ready');

};

if (true) {
  exports.add = worker.register;
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=workerpool.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), "/"))

/***/ }),

/***/ "./src/command/CommandServiceProvider.js":
/*!***********************************************!*\
  !*** ./src/command/CommandServiceProvider.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommandServiceProvider; });
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js");
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constracts_ServiceProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constracts/ServiceProvider */ "./src/constracts/ServiceProvider.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var CommandServiceProvider = /*#__PURE__*/function (_ServiceProvider) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(CommandServiceProvider, _ServiceProvider);

  var _super = _createSuper(CommandServiceProvider);

  function CommandServiceProvider() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CommandServiceProvider);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CommandServiceProvider, [{
    key: "register",
    value: function register() {
      var _this2 = this;

      this.app.instance('commands', new Map());
      this.app.mixin({
        registerCommand: function registerCommand(commands) {
          var _this = this;

          if (!Object(underscore__WEBPACK_IMPORTED_MODULE_7__["isArray"])(commands)) {
            commands = [commands];
          }

          commands.forEach(function (command) {
            _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this);

            this.commands[command.name()] = new commnad(this);
          }.bind(this));
        },
        command: function command() {
          for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
          }

          return this.callMethodBinding('command', params);
        }
      });
      this.app.bindMethod('command', function (commandName) {
        _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this2);

        var command = this.app.commands[commandName];

        for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          params[_key2 - 1] = arguments[_key2];
        }

        return command.handle.apply(command, params);
      }.bind(this));
    }
  }]);

  return CommandServiceProvider;
}(_constracts_ServiceProvider__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./src/config/ConfigServiceProvider.js":
/*!*********************************************!*\
  !*** ./src/config/ConfigServiceProvider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigServiceProvider; });
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js");
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constracts_ServiceProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constracts/ServiceProvider */ "./src/constracts/ServiceProvider.js");
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Repository */ "./src/config/Repository.js");
/* harmony import */ var _configs_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configs/app */ "./src/config/configs/app.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ConfigServiceProvider = /*#__PURE__*/function (_ServiceProvider) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ConfigServiceProvider, _ServiceProvider);

  var _super = _createSuper(ConfigServiceProvider);

  function ConfigServiceProvider() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ConfigServiceProvider);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ConfigServiceProvider, [{
    key: "register",
    value: function register() {
      var _this = this;

      var config = {
        app: _configs_app__WEBPACK_IMPORTED_MODULE_8__["default"]
      };
      this.app.singleton('config', function () {
        _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this);

        return new Proxy(new _Repository__WEBPACK_IMPORTED_MODULE_7__["default"](config), {
          set: function set(obj, prop, value) {
            return obj.prop(prop, value);
          },
          get: function get(obj, prop) {
            return obj.getProp(prop);
          }
        });
      }.bind(this));
    }
  }]);

  return ConfigServiceProvider;
}(_constracts_ServiceProvider__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./src/config/Repository.js":
/*!**********************************!*\
  !*** ./src/config/Repository.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Repository; });
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js");
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");







var Repository = /*#__PURE__*/function () {
  function Repository(config) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Repository);

    Object.defineProperty(this, _items, {
      writable: true,
      value: {}
    });
    _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _items)[_items] = config;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Repository, [{
    key: "prop",
    value: function prop(key, value) {
      var _this = this;

      var data = value;
      var keys = this.parseKey(key).reverse();
      keys.forEach(function (k) {
        _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this);

        var temp = {};
        temp[k] = data;
        data = temp;
      }.bind(this));
      Object(underscore__WEBPACK_IMPORTED_MODULE_5__["extend"])(_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _items)[_items], data);
      return value;
    }
  }, {
    key: "getProp",
    value: function getProp(key) {
      var _this2 = this;

      var keys = this.parseKey(key);

      var value = _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _items)[_items];

      keys.forEach(function (k) {
        _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this2);

        if (typeof value !== 'undefined') {
          value = value[k];
        } else {
          value = null;
        }
      }.bind(this));
      return value;
    }
  }, {
    key: "parseKey",
    value: function parseKey(key) {
      return Object(underscore__WEBPACK_IMPORTED_MODULE_5__["isString"])(key) ? key.split('.') : [key];
    }
  }]);

  return Repository;
}();

var _items = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4___default()("items");



/***/ }),

/***/ "./src/config/configs/app.js":
/*!***********************************!*\
  !*** ./src/config/configs/app.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _worker_WorkerServiceProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../worker/WorkerServiceProvider */ "./src/worker/WorkerServiceProvider.js");
/* harmony import */ var _io_http_HttpServiceProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../io/http/HttpServiceProvider */ "./src/io/http/HttpServiceProvider.js");
/* harmony import */ var _io_socket_SocketServiceProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../io/socket/SocketServiceProvider */ "./src/io/socket/SocketServiceProvider.js");
/* harmony import */ var _logs_LogsServiceProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logs/LogsServiceProvider */ "./src/logs/LogsServiceProvider.js");
/* harmony import */ var _command_CommandServiceProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../command/CommandServiceProvider */ "./src/command/CommandServiceProvider.js");
/* harmony import */ var _events_EventServiceProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../events/EventServiceProvider */ "./src/events/EventServiceProvider.js");
/* harmony import */ var _models_ModelServiceProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/ModelServiceProvider */ "./src/models/ModelServiceProvider.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  providers: [_worker_WorkerServiceProvider__WEBPACK_IMPORTED_MODULE_0__["default"], _io_http_HttpServiceProvider__WEBPACK_IMPORTED_MODULE_1__["default"], _command_CommandServiceProvider__WEBPACK_IMPORTED_MODULE_4__["default"], _events_EventServiceProvider__WEBPACK_IMPORTED_MODULE_5__["default"], _models_ModelServiceProvider__WEBPACK_IMPORTED_MODULE_6__["default"]]
});

/***/ }),

/***/ "./src/constracts/ServiceProvider.js":
/*!*******************************************!*\
  !*** ./src/constracts/ServiceProvider.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceProvider; });
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js");
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _foundation_Application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../foundation/Application */ "./src/foundation/Application.js");






/**
 * [app description]
 * @class ServiceProvider
 * @property {Application} app
 * @constructor {[ServiceProvider]}
 */

var ServiceProvider = /*#__PURE__*/function () {
  /**
   * [app description]
   * @type {[Application]}
   */

  /**
   * [constructor description]
   * @param {[Application]} app [description]
   */
  function ServiceProvider(app) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ServiceProvider);

    Object.defineProperty(this, _app, {
      writable: true,
      value: null
    });
    _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _app)[_app] = app;
  }
  /**
   * [app description]
   * @return {[Application]} [description]
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ServiceProvider, [{
    key: "register",
    value: function register() {
      var _this = this;

      this.app.singleton('config', function () {
        _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this);

        return {};
      }.bind(this));
    }
  }, {
    key: "boot",
    value: function boot() {}
  }, {
    key: "app",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _app)[_app];
    }
  }]);

  return ServiceProvider;
}();

var _app = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4___default()("app");



/***/ }),

/***/ "./src/events/Dispatcher.js":
/*!**********************************!*\
  !*** ./src/events/Dispatcher.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dispatcher; });
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js");
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Listener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Listener */ "./src/events/Listener.js");







var Dispatcher = /*#__PURE__*/function () {
  function Dispatcher(app) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dispatcher);

    Object.defineProperty(this, _listeners, {
      writable: true,
      value: new WeakMap()
    });
    Object.defineProperty(this, _app, {
      writable: true,
      value: null
    });
    _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _app)[_app] = app;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Dispatcher, [{
    key: "on",
    value: function on(event, listener) {
      var listeners = _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _listeners)[_listeners].get(event);

      if (!_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _listeners)[_listeners].has(event)) {
        listeners = [];

        _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _listeners)[_listeners].set(event, listeners);
      }

      if (!(listeners.indexOf(listener) > -1)) {
        listeners.push({
          handle: listener,
          once: false
        });
      }
    }
  }, {
    key: "once",
    value: function once(event, listener) {
      var listeners = _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _listeners)[_listeners].get(event);

      if (!_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _listeners)[_listeners].has(event)) {
        listeners = [];

        _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _listeners)[_listeners].set(event, listeners);
      }

      if (!(listeners.indexOf(listener) > -1)) {
        listeners.push({
          handle: listener,
          once: true
        });
      }
    }
  }, {
    key: "emitter",
    value: function emitter(event) {
      var _this = this;

      var _constructor = event.constructor;

      var listeners = _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _listeners)[_listeners][_constructor];

      if (listeners) {
        listeners.map(function (item, index) {
          var _this2 = this;

          _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this);

          var listener = item.listener,
              once = item.once;

          if (item['once']) {
            listeners.splice(index, 1);
          }

          var id = setTimeout(function () {
            _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this2);

            if (_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _app)[_app].isClass(listener)) {
              var handler = new listener();
              handler.handle(event);
            } else {
              listener(event);
            }

            clearTimeout(id);
          }.bind(this), 100);
        }.bind(this));
      }
    }
  }]);

  return Dispatcher;
}();

var _listeners = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4___default()("listeners");

var _app = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4___default()("app");



/***/ }),

/***/ "./src/events/EventServiceProvider.js":
/*!********************************************!*\
  !*** ./src/events/EventServiceProvider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventServiceProvider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constracts_ServiceProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constracts/ServiceProvider */ "./src/constracts/ServiceProvider.js");
/* harmony import */ var _Dispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dispatcher */ "./src/events/Dispatcher.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var EventServiceProvider = /*#__PURE__*/function (_ServiceProvider) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EventServiceProvider, _ServiceProvider);

  var _super = _createSuper(EventServiceProvider);

  function EventServiceProvider() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EventServiceProvider);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EventServiceProvider, [{
    key: "register",
    value: function register() {
      this.app.singleton('dispatcher', _Dispatcher__WEBPACK_IMPORTED_MODULE_6__["default"]);
      this.app.mixin({
        on: function on(event, listener) {
          this.dispatcher.on(event, listener);
        },
        once: function once(event, listener) {
          this.dispatcher.once(event, listener);
        },
        emitter: function emitter(event) {
          this.dispatcher.emitter(event);
        }
      });
    }
  }]);

  return EventServiceProvider;
}(_constracts_ServiceProvider__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/events/Listener.js":
/*!********************************!*\
  !*** ./src/events/Listener.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Listener; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Listener = /*#__PURE__*/function () {
  function Listener() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Listener);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Listener, [{
    key: "handle",
    value: function handle(event) {}
  }]);

  return Listener;
}();



/***/ }),

/***/ "./src/foundation/Application.js":
/*!***************************************!*\
  !*** ./src/foundation/Application.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Application; });
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js");
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _zoranwong_pure_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @zoranwong/pure-container */ "./node_modules/@zoranwong/pure-container/lib/main.js");
/* harmony import */ var _zoranwong_pure_container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_zoranwong_pure_container__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_10__);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var providers = new Map();
var globalProviderRegistered = new Map();

var Application = /*#__PURE__*/function (_Container) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Application, _Container);

  var _super = _createSuper(Application);

  function Application() {
    var _this2 = this;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Application);

    _this = _super.call(this);
    Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), _providerToKey, {
      value: _providerToKey2
    });
    Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), _rootPath, {
      writable: true,
      value: null
    });
    Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), _serviceProviders, {
      writable: true,
      value: null
    });
    Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), _providerRegistered, {
      writable: true,
      value: null
    });
    Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), _config, {
      writable: true,
      value: {}
    });
    Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), _lifeCycles, {
      writable: true,
      value: {
        beforeCreated: function beforeCreated() {
          _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this2);

          _this.registerServiceProviders();
        }.bind(this),
        created: function created() {
          _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this2);

          _this.boot();
        }.bind(this),
        beforeDestroy: function beforeDestroy() {
          _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this2);
        }.bind(this),
        onDestroy: function onDestroy() {
          _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this2);
        }.bind(this)
      }
    });
    _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), _serviceProviders)[_serviceProviders] = providers;
    _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), _providerRegistered)[_providerRegistered] = globalProviderRegistered;
    return _this;
  }
  /**
   * 获取容器代理对象
   * @return {Container|Application|Proxy}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Application, [{
    key: "register",
    value: function register() {}
  }, {
    key: "providerRegistered",
    value: function providerRegistered(provider) {
      var key = _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7___default()(this, _providerToKey)[_providerToKey](provider);

      return _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7___default()(this, _providerRegistered)[_providerRegistered].has(key);
    }
  }, {
    key: "registerProvider",
    value: function registerProvider(provider) {
      var p = new provider(this);

      var key = _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7___default()(this, _providerToKey)[_providerToKey](provider);

      p.register();
      this.providers.set(key, p);

      _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7___default()(this, _providerRegistered)[_providerRegistered].set(key, true);
    }
  }, {
    key: "boot",
    value: function boot() {
      var _this3 = this;

      this.providers.forEach(function (provider) {
        _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this3);

        provider.boot();
      }.bind(this));
    }
  }, {
    key: "registerServiceProviders",
    value: function registerServiceProviders() {
      var _this4 = this;

      var config = this.get('config');

      if (config && config.app && config.app.providers) {
        config.app.providers.forEach(function (provider) {
          _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this4);

          if (!this.providerRegistered(provider)) {
            this.registerProvider(provider);
          }
        }.bind(this));
      }
    }
  }, {
    key: "run",
    value: function run() {
      //before app run
      _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7___default()(this, _lifeCycles)[_lifeCycles].beforeCreated(); //after


      _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7___default()(this, _lifeCycles)[_lifeCycles].created();
    }
  }, {
    key: "providers",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7___default()(this, _serviceProviders)[_serviceProviders];
    },
    set: function set(providers) {
      return _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_7___default()(this, _serviceProviders)[_serviceProviders] = providers;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!Application._instance) {
        Application._instance = new Application();
      }

      return Application._instance.getProxy();
    }
  }]);

  return Application;
}(_zoranwong_pure_container__WEBPACK_IMPORTED_MODULE_9___default.a);

var _rootPath = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8___default()("rootPath");

var _serviceProviders = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8___default()("serviceProviders");

var _providerRegistered = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8___default()("providerRegistered");

var _config = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8___default()("config");

var _lifeCycles = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8___default()("lifeCycles");

var _providerToKey = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_8___default()("providerToKey");

var _providerToKey2 = function _providerToKey2(provider) {
  return md5__WEBPACK_IMPORTED_MODULE_10___default()(provider.toString());
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _foundation_Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation/Application */ "./src/foundation/Application.js");
/* harmony import */ var _config_ConfigServiceProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/ConfigServiceProvider */ "./src/config/ConfigServiceProvider.js");
//


var app = _foundation_Application__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance();
app.registerProvider(_config_ConfigServiceProvider__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/io/http/Adapter.js":
/*!********************************!*\
  !*** ./src/io/http/Adapter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Adapter; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5__);







var Adapter = /*#__PURE__*/function () {
  function Adapter(app) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Adapter);

    Object.defineProperty(this, _url, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _data, {
      writable: true,
      value: {}
    });
    Object.defineProperty(this, _method, {
      writable: true,
      value: ''
    });
    Object.defineProperty(this, _app, {
      writable: true,
      value: null
    });
    _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _app)[_app] = app;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Adapter, [{
    key: "get",
    value: function () {
      var _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
        var querys,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                querys = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _url)[_url] = url;
                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _data)[_data] = querys;
                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _method)[_method] = 'GET';

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "post",
    value: function () {
      var _post = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url) {
        var data,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _url)[_url] = url;
                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _data)[_data] = data;
                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _method)[_method] = 'POST';

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function post(_x2) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: "put",
    value: function () {
      var _put = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url) {
        var data,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _url)[_url] = url;
                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _data)[_data] = data;
                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _method)[_method] = 'PUT';

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function put(_x3) {
        return _put.apply(this, arguments);
      }

      return put;
    }()
  }, {
    key: "del",
    value: function () {
      var _del = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(url) {
        var data,
            _args4 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _url)[_url] = url;
                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _data)[_data] = data;
                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _method)[_method] = 'DELETE';

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function del(_x4) {
        return _del.apply(this, arguments);
      }

      return del;
    }()
  }]);

  return Adapter;
}();

var _url = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5___default()("url");

var _data = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5___default()("data");

var _method = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5___default()("method");

var _app = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5___default()("app");



/***/ }),

/***/ "./src/io/http/Client.js":
/*!*******************************!*\
  !*** ./src/io/http/Client.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Client; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__);





var Client = /*#__PURE__*/function () {
  function Client(app) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Client);

    Object.defineProperty(this, _app, {
      writable: true,
      value: null
    });
    _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2___default()(this, _app)[_app] = app;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Client, [{
    key: "adapter",
    get: function get() {
      return _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2___default()(this, _app)[_app].httpAdapter;
    }
  }]);

  return Client;
}();

var _app = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3___default()("app");



/***/ }),

/***/ "./src/io/http/HttpServiceProvider.js":
/*!********************************************!*\
  !*** ./src/io/http/HttpServiceProvider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HttpServiceProvider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constracts_ServiceProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constracts/ServiceProvider */ "./src/constracts/ServiceProvider.js");
/* harmony import */ var _XMLHttpAdapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./XMLHttpAdapter */ "./src/io/http/XMLHttpAdapter.js");
/* harmony import */ var _Client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Client */ "./src/io/http/Client.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var HttpServiceProvider = /*#__PURE__*/function (_ServiceProvider) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(HttpServiceProvider, _ServiceProvider);

  var _super = _createSuper(HttpServiceProvider);

  function HttpServiceProvider() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HttpServiceProvider);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HttpServiceProvider, [{
    key: "register",
    value: function register() {
      // this.app.bind('httpAdapter', XMLHttpAdapter);
      this.app.singleton('http', _Client__WEBPACK_IMPORTED_MODULE_7__["default"]);
    }
  }]);

  return HttpServiceProvider;
}(_constracts_ServiceProvider__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/io/http/XMLHttpAdapter.js":
/*!***************************************!*\
  !*** ./src/io/http/XMLHttpAdapter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XMLHttpAdapter; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Adapter */ "./src/io/http/Adapter.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var XMLHttpAdapter = /*#__PURE__*/function (_Adapter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(XMLHttpAdapter, _Adapter);

  var _super = _createSuper(XMLHttpAdapter);

  function XMLHttpAdapter(app) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, XMLHttpAdapter);

    return _super.call(this, app);
  }

  return XMLHttpAdapter;
}(_Adapter__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./src/io/socket/SocketServiceProvider.js":
/*!************************************************!*\
  !*** ./src/io/socket/SocketServiceProvider.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocketServiceProvider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var SocketServiceProvider = function SocketServiceProvider() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SocketServiceProvider);
};



/***/ }),

/***/ "./src/logs/LogsServiceProvider.js":
/*!*****************************************!*\
  !*** ./src/logs/LogsServiceProvider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogsServiceProvider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var LogsServiceProvider = function LogsServiceProvider() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LogsServiceProvider);
};



/***/ }),

/***/ "./src/models/Database.js":
/*!********************************!*\
  !*** ./src/models/Database.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Database; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__);





var Database = /*#__PURE__*/function () {
  function Database() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Database);

    Object.defineProperty(this, _driver, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _store, {
      writable: true,
      value: {}
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Database, [{
    key: "store",
    get: function get() {
      return new (_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2___default()(this, _driver)[_driver])(_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2___default()(this, _store)[_store]);
    }
  }]);

  return Database;
}();

var _driver = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3___default()("driver");

var _store = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3___default()("store");



/***/ }),

/***/ "./src/models/ModelServiceProvider.js":
/*!********************************************!*\
  !*** ./src/models/ModelServiceProvider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelServiceProvider; });
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js");
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constracts_ServiceProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constracts/ServiceProvider */ "./src/constracts/ServiceProvider.js");
/* harmony import */ var _Database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Database */ "./src/models/Database.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ModelServiceProvider = /*#__PURE__*/function (_ServiceProvider) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ModelServiceProvider, _ServiceProvider);

  var _super = _createSuper(ModelServiceProvider);

  function ModelServiceProvider() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ModelServiceProvider);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ModelServiceProvider, [{
    key: "register",
    value: function register() {
      var _this = this;

      this.app.singleton('db', function () {
        _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this);

        new _Database__WEBPACK_IMPORTED_MODULE_7__["default"]();
      }.bind(this));
    }
  }]);

  return ModelServiceProvider;
}(_constracts_ServiceProvider__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./src/worker/Thread.js":
/*!******************************!*\
  !*** ./src/worker/Thread.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Thread; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5__);







var Thread = /*#__PURE__*/function () {
  function Thread(name, task, pool) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Thread);

    Object.defineProperty(this, _threadId, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _task, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _name, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _pool, {
      writable: true,
      value: null
    });
    _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _name)[_name] = name;
    _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _task)[_task] = task;
    _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _pool)[_pool] = pool;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Thread, [{
    key: "run",
    value: function () {
      var _run = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var task,
            _len,
            params,
            _key,
            result,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                task = _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _task)[_task];

                for (_len = _args.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
                  params[_key] = _args[_key];
                }

                _context.next = 4;
                return _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _pool)[_pool].exec(task, params);

              case 4:
                result = _context.sent;

                _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4___default()(this, _pool)[_pool].terminate();

                return _context.abrupt("return", result);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function run() {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }]);

  return Thread;
}();

var _threadId = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5___default()("threadId");

var _task = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5___default()("task");

var _name = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5___default()("name");

var _pool = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5___default()("pool");



/***/ }),

/***/ "./src/worker/WorkerManager.js":
/*!*************************************!*\
  !*** ./src/worker/WorkerManager.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkerManager; });
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js");
/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var workerpool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workerpool */ "./node_modules/workerpool/dist/workerpool.js");
/* harmony import */ var workerpool__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(workerpool__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Thread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Thread */ "./src/worker/Thread.js");








var WorkerManager = /*#__PURE__*/function () {
  function WorkerManager(app) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, WorkerManager);

    Object.defineProperty(this, _app, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _pool, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _workers, {
      writable: true,
      value: {}
    });
    _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _app)[_app] = app;
    _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _pool)[_pool] = workerpool__WEBPACK_IMPORTED_MODULE_5___default.a.pool();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(WorkerManager, [{
    key: "thread",
    value: function thread(name, _thread) {
      _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _workers)[_workers][name] = new _Thread__WEBPACK_IMPORTED_MODULE_6__["default"](name, _thread, _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _pool)[_pool]);
      return this;
    }
  }, {
    key: "run",
    value: function run(name) {
      var _this = this;

      var worker = _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3___default()(this, _workers)[_workers][name];

      return worker ? worker.run.bind(worker) : function () {
        _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this);
      }.bind(this);
    }
  }]);

  return WorkerManager;
}();

var _app = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4___default()("app");

var _pool = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4___default()("pool");

var _workers = _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_4___default()("workers");



/***/ }),

/***/ "./src/worker/WorkerServiceProvider.js":
/*!*********************************************!*\
  !*** ./src/worker/WorkerServiceProvider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkerServiceProvider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constracts_ServiceProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constracts/ServiceProvider */ "./src/constracts/ServiceProvider.js");
/* harmony import */ var _WorkerManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WorkerManager */ "./src/worker/WorkerManager.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var WorkerServiceProvider = /*#__PURE__*/function (_ServiceProvider) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(WorkerServiceProvider, _ServiceProvider);

  var _super = _createSuper(WorkerServiceProvider);

  function WorkerServiceProvider() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WorkerServiceProvider);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WorkerServiceProvider, [{
    key: "register",
    value: function register() {
      this.app.singleton('workerManager', _WorkerManager__WEBPACK_IMPORTED_MODULE_6__["default"]);
    }
  }]);

  return WorkerServiceProvider;
}(_constracts_ServiceProvider__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=main.js.map