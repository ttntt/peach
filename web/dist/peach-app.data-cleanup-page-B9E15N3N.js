(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "12fe5f47-9863-4edd-8a86-3d2b62bf40e8", e._sentryDebugIdIdentifier = "sentry-dbid-12fe5f47-9863-4edd-8a86-3d2b62bf40e8");
	} catch {}
})();
import { BATCH_DELETE_TEXT as e, Button as t, CLEANUP_ENTRY as n, CLEANUP_ENTRY_GRID as r, CLEANUP_HASH_REDIRECTS as i, CLEANUP_TOOLS as a, Chip as o, DIRECTORY_TEMPLATE_ERROR as s, DUPLICATES_KEY as c, Fieldset as l, FieldsetTitle as u, IDLE_REPAIR as d, IconButton as f, IndexSearch as p, Input as m, JUNK_KEY as h, LINKS_KEY as g, LINK_CHECK_KEY as _, LINK_KINDS as v, LINK_PRUNE_KEY as ee, LOC as y, LibraryProcessingCard as b, MEDIA_REPAIR_KEY as x, MEDIA_REPAIR_URL as S, MEDIA_SOURCES_KEY as te, MEDIA_SOURCE_ICONS as ne, Note as C, ORGANIZE_KEY as w, ORGANIZE_PARAMETER_HINT as re, ORGANIZE_SCOPE_HINT as ie, ORGANIZE_TEXT as ae, ORPHAN_RECORDS_KEY as T, ORPHAN_RECORDS_TEXT as oe, PERFORMER_DELETE_KEY as E, PLAIN_STAT_STRIP as D, PlainStat as O, Progress as k, QUALITY_GOALS_KEY as se, REPAIR_CARD_TEXT as ce, REPAIR_LIBRARIES_KEY as le, RESOURCE_APPLY_KEY as A, RESOURCE_SCAN_KEY as ue, RESOURCE_SYNC_TEXT as de, RESULT_PANEL as j, RESULT_SECTION as fe, REVIEW_COUNTS_KEY as pe, SOURCE_LABELS as me, SectionHeading as M, Select as he, SelectItem as ge, SourceMark as _e, StatusLabel as N, TRASH_KEY as ve, TaskProgress as P, Wt as F, __toESM as ye, apiSend as be, applyConfirmText as I, applyLeftovers as L, applyPlanText as R, applyText as xe, attachOrphan as Se, baseName as z, busyProps as B, candidateText as Ce, checkLine as we, confirmModal as V, cx as H, deletePerformerVideos as Te, entityDisplayName as Ee, entityFaceImg as De, entityPath as Oe, errorMessage as U, esc as W, fetchDeletePerformers as ke, fetchDeletePlan as G, fetchDuplicates as Ae, fetchJunkSummary as je, fetchLinkCheck as Me, fetchLinkPrune as Ne, fetchLinkStats as Pe, fetchMediaRepair as Fe, fetchMediaSources as Ie, fetchOrganize as Le, fetchOrganizeExample as Re, fetchOrphanRecords as ze, fetchQualityGoals as Be, fetchRepairLibraries as Ve, fetchResourceApply as He, fetchResourceScan as Ue, fetchReviewCounts as We, fetchTrashSummary as Ge, firstGrapheme as Ke, fmtSize as K, hasChanges as qe, hasResourceRoots as Je, junkBreakdown as Ye, missingToolText as Xe, organizeOutcome as Ze, peachHistory$1 as Qe, pickOrganizeFolder as $e, plainStatClass as et, planSummary as tt, previewOrganize as nt, pruneText as rt, purgeCount as it, purgeOrphan as at, queryClient as q, recordsText as ot, rememberTemplates as st, require_jsx_runtime as ct, require_react as lt, reviewSummary as ut, scanLine as dt, sourceMeta as ft, spriteGlyph as J, startLinkCheck as pt, startLinkPrune as mt, startOrganize as ht, startResourceApply as gt, startResourceScan as _t, statusLine as vt, t as Y, useAction as yt, useBackgroundJob as X, useEntityNames as bt, useMutation as xt, useOrderedLibraries as St, useQuery as Z, withOrganizeJob as Ct } from "./peach-app.js";
import { Page as wt } from "./peach-app.page-QAncjzM1.js";
import { ErrorExcerpt as Tt } from "./peach-app.error-excerpt-B8v2xEIP.js";
import { DataTable as Et } from "./peach-app.data-table-CPTRrw04.js";
import { SiteMark as Dt } from "./peach-app.site-mark-D_VlIyJz.js";
import { LEGACY_AVATAR_IMG as Ot } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as kt } from "./peach-app.folder-rows-BWBfTyUD.js";
import { ConnectionStatus as At } from "./peach-app.connection-status-DI6kgn3i.js";
// src/react/data-cleanup/cleanup-entry-card.tsx
var Q = /* @__PURE__ */ ye(lt(), 1), $ = ct(), jt = J("chevron-right");
function Mt({ label: e, icon: t, summary: r, detail: i, state: a, attributes: o, onOpen: s }) {
	return /* @__PURE__ */ (0, $.jsxs)("button", {
		type: "button",
		...o,
		className: n.face,
		onClick: s,
		"data-entry-state": a,
		"aria-busy": a === "loading" || void 0,
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				"aria-hidden": !0,
				className: n.icon,
				children: /* @__PURE__ */ (0, $.jsx)(t, {
					"aria-hidden": !0,
					className: "size-5"
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)("span", {
				className: n.body,
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: n.title,
						children: e
					}),
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: H(n.summary, a === "error" && "text-text-error-primary"),
						children: r
					}),
					i ? /* @__PURE__ */ (0, $.jsx)("span", {
						className: n.detail,
						children: i
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(jt, {
				"aria-hidden": !0,
				className: n.arrow
			})
		]
	});
}
// src/react/media-repair/media-repair-card.tsx
var Nt = (e) => ne[e] || e, Pt = (e) => q.setQueryData(x, e);
function Ft({ toast: e = () => {} }) {
	let n = X({
		queryKey: x,
		queryFn: ({ signal: e }) => Fe(e),
		start: (e) => be(S, {
			library: e,
			restart: !0
		}),
		onFinish: (t) => {
			t.status === "complete" && !t.failed && !t.missing_tool && e(t.repaired ? Y("cleanup:mediaRepair.repaired", { count: t.repaired }) : Y("cleanup:mediaRepair.nothingToRepair"));
		}
	}), r = Z({
		queryKey: le,
		queryFn: ({ signal: e }) => Ve(e)
	}), [i, a] = (0, Q.useState)(""), o = yt(), s = n.job ?? d, c = St(r.data ?? [], (e) => e.id), f = s.status === "running", p = c.find((e) => e.id === (f ? s.library : i)) ?? c.find((e) => e.id === s.library) ?? c[0], m = () => {
		p && V({
			title: Y("cleanup:mediaRepair.confirmTitle", { name: p.name }),
			body: [Y("cleanup:mediaRepair.body"), ...p.metered ? [Y("cleanup:mediaRepair.meteredWarning")] : []].join(Y("cleanup:shared.sentenceGap")),
			confirmLabel: Y("cleanup:mediaRepair.confirm"),
			onConfirm: async () => {
				await n.start.mutateAsync(p.id);
			}
		});
	}, h = () => void o.run("stop", (e) => be(S, { stop: !0 }, "POST", e), Pt), g = n.outcome, _ = vt(f ? s : g ?? d), v = o.error || g?.error || (n.query.error ? Y("cleanup:mediaRepair.statusUnavailable") : "");
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsx)(l, {
			layout: "split",
			label: Y("cleanup:tools.mediaRepair"),
			footer: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(he, {
				"aria-label": Y("cleanup:mediaRepair.library"),
				prefix: Y("cleanup:mediaRepair.library"),
				className: "w-48",
				selectedKey: p?.id ?? null,
				isDisabled: f || !c.length,
				"aria-busy": r.isPending || void 0,
				onSelectionChange: (e) => {
					e !== null && a(String(e));
				},
				children: c.map((e) => /* @__PURE__ */ (0, $.jsxs)(ge, {
					id: e.id,
					textValue: e.name,
					children: [/* @__PURE__ */ (0, $.jsx)(_e, { mark: Nt(e.icon) }), e.name]
				}, e.id))
			}), f ? /* @__PURE__ */ (0, $.jsx)(t, {
				onClick: h,
				...B(o.busy === "stop"),
				children: Y("cleanup:shared.stop")
			}) : /* @__PURE__ */ (0, $.jsx)(t, {
				onClick: m,
				disabled: !p,
				children: Y("cleanup:mediaRepair.start")
			})] }),
			children: /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsx)(u, { children: Y("cleanup:tools.mediaRepair") }),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: ce
					}),
					f && s.total ? /* @__PURE__ */ (0, $.jsx)(k, {
						label: Y("cleanup:mediaRepair.progress"),
						value: s.checked,
						max: s.total
					}) : null,
					_ ? /* @__PURE__ */ (0, $.jsx)("p", {
						role: "status",
						className: "text-caption-1-regular text-text-secondary",
						children: _
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: [
				g?.status === "complete" && g.missing_tool ? /* @__PURE__ */ (0, $.jsx)(C, {
					tone: "warning",
					title: Y("cleanup:mediaRepair.missingTool"),
					action: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "ghost",
						size: "small",
						onClick: n.dismiss,
						children: Y("cleanup:mediaRepair.dismiss")
					}),
					children: Xe(g)
				}) : null,
				r.isError ? /* @__PURE__ */ (0, $.jsx)(C, {
					tone: "error",
					children: Y("cleanup:mediaRepair.librariesUnavailable")
				}) : null,
				v ? /* @__PURE__ */ (0, $.jsx)(C, {
					tone: "error",
					children: v
				}) : null
			]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function It({ className: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("svg", {
		"aria-hidden": !0,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: e,
		"data-link-check-icon": "",
		children: [
			/* @__PURE__ */ (0, $.jsx)("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
			/* @__PURE__ */ (0, $.jsx)("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
			/* @__PURE__ */ (0, $.jsxs)("g", {
				"data-link-check-rays": "",
				children: [
					/* @__PURE__ */ (0, $.jsx)("path", { d: "M8 2v3" }),
					/* @__PURE__ */ (0, $.jsx)("path", { d: "M2 8h3" }),
					/* @__PURE__ */ (0, $.jsx)("path", { d: "M16 19v3" }),
					/* @__PURE__ */ (0, $.jsx)("path", { d: "M19 16h3" })
				]
			})
		]
	});
}
// src/react/data-cleanup/link-manager.tsx
var Lt = J("rotate-cw"), Rt = Y("cleanup:links.goneHint"), zt = Y("cleanup:links.unclearHint"), Bt = Y("cleanup:links.pruneHint"), Vt = Y("cleanup:shared.reconnecting"), Ht = (e) => Number(e || 0).toLocaleString();
function Ut({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ (0, $.jsx)("b", {
				className: "text-title-2-semibold font-bold leading-5 tabular-nums text-text-primary",
				children: t
			}),
			n ? /* @__PURE__ */ (0, $.jsx)("small", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: n
			}) : null
		]
	});
}
function Wt({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	if (!t.length) return null;
	let c = [
		{
			id: "entity",
			label: Y("cleanup:links.columnEntry"),
			width: 180,
			min: 128,
			value: (e) => e.entity,
			render: (e) => /* @__PURE__ */ (0, $.jsxs)("a", {
				className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary hover:underline",
				href: e.entity_id && e.entity_kind ? Oe(e.entity_kind, e.entity, e.entity_id) : void 0,
				"data-link-identity": "",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					"data-link-avatar": "",
					className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${Ot}`,
					"aria-hidden": !0,
					dangerouslySetInnerHTML: { __html: `<span>${W(Ke(e.entity))}</span>` + De({
						kind: e.entity_kind,
						id: e.entity_id,
						hasImage: e.face?.has_image,
						version: e.face?.image_version,
						focus: e.face?.avatar_focus,
						thumb: !0,
						mark: e.entity_kind === "studio" || e.entity_kind === "agency" ? e.id : null
					}) }
				}), /* @__PURE__ */ (0, $.jsx)("span", {
					className: "min-w-0 wrap-anywhere",
					children: e.entity
				})]
			})
		},
		{
			id: "kind",
			label: Y("cleanup:shared.type"),
			width: 128,
			value: (e) => v[e.link_kind] || e.link_kind,
			render: (e) => v[e.link_kind] || e.link_kind
		},
		{
			id: "label",
			label: Y("cleanup:links.columnName"),
			min: 128,
			value: (e) => e.label || "",
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				className: "flex min-w-24 items-center gap-2",
				"data-link-name": "",
				children: /* @__PURE__ */ (0, $.jsx)("span", {
					className: "min-w-0 wrap-anywhere",
					children: e.label || new URL(e.url).hostname
				})
			})
		},
		{
			id: "note",
			label: Y("cleanup:links.columnResult"),
			width: 320,
			min: 192,
			value: (e) => e.note,
			render: (e) => /* @__PURE__ */ (0, $.jsx)("div", {
				className: "min-w-0 w-full",
				"data-link-result": s ? "gone" : "unclear",
				children: /^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ (0, $.jsx)(N, {
					tone: s || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
					"data-link-code": "",
					children: e.note.trim()
				}) : /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col items-start gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(N, {
						tone: s ? "error" : "warning",
						children: Y(s ? "cleanup:links.dead" : "cleanup:links.inconclusive")
					}), /* @__PURE__ */ (0, $.jsx)(Tt, {
						text: e.note,
						className: "tabular-nums text-text-secondary"
					})]
				})
			})
		},
		{
			id: "url",
			label: Y("cleanup:links.columnUrl"),
			width: 360,
			min: 180,
			value: (e) => e.url,
			render: (e) => /* @__PURE__ */ (0, $.jsxs)("a", {
				href: e.url,
				target: "_blank",
				rel: "noopener noreferrer",
				title: e.url,
				"data-link-address": "",
				className: "flex min-w-0 items-center gap-1 text-text-secondary hover:text-text-primary",
				children: [
					/* @__PURE__ */ (0, $.jsx)(Dt, { linkId: e.id }),
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-middle-truncate": !0,
						className: "min-w-0 truncate",
						children: e.url
					}),
					/* @__PURE__ */ (0, $.jsx)(F, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})
				]
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: fe,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ (0, $.jsx)(Et, {
			label: e,
			items: t,
			columns: c,
			rowId: (e) => String(e.id),
			description: n,
			unit: Y("cleanup:links.unit"),
			panel: !1,
			footerActions: o,
			rowLabel: (e) => Y("cleanup:links.rowLabel", {
				entity: e.entity,
				link: e.label || e.url
			}),
			selected: r.map(String),
			onSelected: (e) => i(e.map(Number)),
			actions: () => a
		})
	});
}
function Gt() {
	let e = Z({
		queryKey: g,
		queryFn: ({ signal: e }) => Pe(e)
	}), [n, r] = (0, Q.useState)([]), [i, a] = (0, Q.useState)([]), s = X({
		queryKey: ee,
		queryFn: ({ signal: e }) => Ne(e),
		start: mt,
		onFinish: () => {
			q.invalidateQueries({
				queryKey: g,
				exact: !0
			}), q.invalidateQueries({
				queryKey: _,
				exact: !0
			});
		}
	}), c = X({
		queryKey: _,
		queryFn: ({ signal: e }) => Me(e),
		start: pt,
		onStarted: () => {
			s.dismiss(), r([]), a([]);
		}
	}), d = c.job, f = d?.check_id ?? "";
	(0, Q.useEffect)(() => {
		r([]), a([]);
	}, [f]);
	let p = c.running || c.start.isPending, m = s.running || s.start.isPending, h = !!c.job && !!s.job, y = d?.status === "complete", b = d?.gone ?? [], x = d?.unclear ?? [], S = y ? x : [], te = b.filter((e) => i.includes(e.id)).map((e) => e.id), ne = S.filter((e) => n.includes(e.id)).map((e) => e.id), w = e.data, re = (w?.top_hosts ?? []).slice(0, 3), ie = (e) => {
		!h || p || e && !e.length || c.start.mutate(e ? {
			retry: e,
			checkId: f
		} : {});
	}, ae = (e) => {
		h && !m && b.length && V({
			title: Y("cleanup:links.deleteDead"),
			body: Y("cleanup:links.deleteDeadBody", { count: e?.length ?? b.length }),
			confirmLabel: Y("cleanup:links.deleteDead"),
			danger: !0,
			onConfirm: () => s.start.mutateAsync({
				checkId: f,
				ids: e
			})
		});
	}, T = s.outcome, oe = c.start.error ?? s.start.error, E = null, D = null;
	if (T?.status === "failed") D = /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "error",
		title: Y("cleanup:links.pruneIncomplete"),
		children: T.error || Y("cleanup:links.checkTaskLog")
	});
	else if (T && !b.length && !x.length) D = /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "success",
		title: Y("cleanup:links.pruneDone"),
		children: rt(T)
	});
	else if (oe) D = /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "error",
		title: Y("cleanup:links.checkFailed"),
		children: U(oe)
	});
	else if (c.query.isError && d) D = /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "neutral",
		title: Y("cleanup:shared.taskStatus"),
		children: Vt
	});
	else if (d?.status === "failed") D = /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "error",
		title: Y("cleanup:links.checkFailed"),
		children: d.error || Y("cleanup:links.checkFailed")
	});
	else if (d && d.status !== "idle") {
		E = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [d.status === "running" ? /* @__PURE__ */ (0, $.jsx)(P, {
			embedded: !0,
			label: we(d),
			value: Math.min(d.checked || 0, d.total || 0),
			total: d.total
		}) : null, m ? /* @__PURE__ */ (0, $.jsx)(P, {
			embedded: !0,
			label: s.job?.message || Y("cleanup:links.pruning"),
			value: Math.min(s.job?.checked || 0, s.job?.total || 0),
			total: s.job?.total
		}) : null] });
		let e = Y("cleanup:links.retrySelected", { count: ne.length });
		D = y || b.length || x.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
			className: j,
			children: [
				T?.status === "complete" ? /* @__PURE__ */ (0, $.jsx)(C, {
					tone: "success",
					title: Y("cleanup:links.pruneDone"),
					children: rt(T)
				}) : null,
				/* @__PURE__ */ (0, $.jsx)(Wt, {
					title: Y("cleanup:links.dead"),
					items: b,
					hint: Rt,
					picked: i,
					onPick: a,
					confirmed: !0,
					footer: y && b.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: Bt
					}), /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "danger",
						...B(m),
						onClick: () => ae(),
						children: Y("cleanup:links.deleteDeadCount", { count: b.length })
					})] }) : null,
					children: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "danger",
						size: "small",
						disabled: !y || !te.length,
						...B(m),
						onClick: () => ae(te),
						children: Y("cleanup:links.deleteSelected", { count: te.length })
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(Wt, {
					title: Y("cleanup:links.unreached"),
					items: x,
					hint: zt,
					picked: n,
					onPick: r,
					footer: S.length ? /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "primary",
						leadingIcon: Lt,
						...B(p),
						onClick: () => ie(S.map((e) => e.id)),
						children: Y("cleanup:links.retryAll", { count: S.length })
					}) : null,
					children: S.length ? /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "secondary",
						leadingIcon: Lt,
						disabled: !ne.length,
						...B(p),
						onClick: () => ie(ne),
						children: e
					}) }) : null
				}),
				y && !b.length && !x.length ? /* @__PURE__ */ (0, $.jsx)("p", {
					className: `${fe} text-body-regular text-notification-success-foreground`,
					children: Y("cleanup:links.allReachable")
				}) : null
			]
		}) : null;
	}
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "link-manager",
		"aria-labelledby": "link-manager-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsxs)(l, {
			layout: "stack",
			labelledBy: "link-manager-title",
			footer: /* @__PURE__ */ (0, $.jsx)(t, {
				"data-link-check": "",
				leadingIcon: It,
				disabled: !h,
				...B(p),
				onClick: () => ie(),
				children: Y(p ? "cleanup:links.checking" : y ? "cleanup:links.checkAgain" : "cleanup:links.checkLinks")
			}),
			children: [
				/* @__PURE__ */ (0, $.jsx)(u, {
					id: "link-manager-title",
					gap: "small",
					children: Y("cleanup:tools.links")
				}),
				e.isError ? /* @__PURE__ */ (0, $.jsx)(C, {
					tone: "error",
					title: Y("cleanup:links.statsLoadFailed"),
					children: U(e.error)
				}) : w ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ (0, $.jsx)(Ut, {
						label: Y("cleanup:links.totalLinks"),
						value: Ht(w.total),
						note: Y("cleanup:links.entitySpread", { count: Number(w.entities || 0) })
					}), Object.entries(w.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(Ut, {
						label: v[e] || e,
						value: Ht(t)
					}, e))]
				}), re.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: Y("cleanup:links.topSites")
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: re.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ (0, $.jsxs)("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ (0, $.jsx)(Dt, { linkId: w.top_host_link_ids?.[e] }),
									/* @__PURE__ */ (0, $.jsx)("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ (0, $.jsx)(F, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ (0, $.jsx)(o, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ (0, $.jsx)("span", {
									className: "tabular-nums",
									children: Ht(t)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ (0, $.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: E
				})
			]
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: D
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var Kt = {
	output_root: "",
	skip_dirs: [],
	only_dirs: [],
	prefix_min_count: 0,
	collision: "skip"
}, qt = (e, t, n) => {
	let r = [
		n.output_root ? Y("cleanup:organize.ruleOutputRoot", { root: n.output_root }) : "",
		n.skip_dirs.length ? Y("cleanup:organize.ruleSkipDirs", { count: n.skip_dirs.length }) : "",
		n.only_dirs.length ? Y("cleanup:organize.ruleOnlyDirs", { count: n.only_dirs.length }) : "",
		n.prefix_min_count > 0 ? Y("cleanup:organize.rulePrefix", { count: n.prefix_min_count }) : "",
		n.collision === "suffix" ? Y("cleanup:organize.ruleCollisionSuffix") : Y("cleanup:organize.ruleCollisionSkip")
	].filter(Boolean);
	return (t ? Y("cleanup:organize.applyBodyPath", {
		name: e,
		path: t
	}) : Y("cleanup:organize.applyBodyAll", { name: e })) + (r.length ? Y("cleanup:organize.applyRules", { rules: r.join(Y("cleanup:organize.ruleGap")) }) : "");
}, Jt = Y("cleanup:organize.rollbackBody"), Yt = 8;
function Xt(e) {
	return e.split(/[,，;\n\r]+/).map((e) => e.trim()).filter(Boolean);
}
function Zt(e) {
	return (e || []).join(", ");
}
function Qt(e, t) {
	return e === "skip" ? Y("cleanup:organize.collisionSkip") : e === "suffix" ? Y("cleanup:organize.collisionSuffix") : t;
}
function $t({ plan: e }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, Yt).map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ (0, $.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: z(e.current_path)
				}),
				/* @__PURE__ */ (0, $.jsx)("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ (0, $.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: z(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > Yt ? /* @__PURE__ */ (0, $.jsx)("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: Y("cleanup:organize.planTruncated")
	}) : null] });
}
function en({ toast: e, failure: n }) {
	let r = Z({
		queryKey: w,
		queryFn: ({ signal: e }) => Le(e)
	}), i = r.data, a = i?.locations ?? [], [o, c] = (0, Q.useState)(""), d = a.some((e) => e.location === o) ? o : a[0]?.location ?? "", p = i?.templates?.[d], [h, g] = (0, Q.useState)(null), _ = h?.location === d ? h : {
		location: d,
		file: p?.file ?? "",
		dir: p?.dir ?? ""
	}, v = (e) => {
		g({
			..._,
			...e
		}), I.reset();
	}, ee = i?.organize_rules?.defaults ?? Kt, [b, x] = (0, Q.useState)(null), S = b ?? ee, [te, T] = (0, Q.useState)(null), [oe, E] = (0, Q.useState)(null), D = te ?? Zt(S.skip_dirs), O = oe ?? Zt(S.only_dirs), k = (e) => {
		x({
			...S,
			...e
		}), "skip_dirs" in e && T(null), "only_dirs" in e && E(null), j(null), I.reset();
	}, se = (e) => {
		let t = e.javorg_mode ? i?.organize_rules?.preset_rules?.[e.javorg_mode] : void 0, n = {
			output_root: e.output_root ?? t?.output_root ?? "",
			skip_dirs: e.skip_dirs ?? t?.skip_dirs ?? [],
			only_dirs: e.only_dirs ?? t?.only_dirs ?? [],
			prefix_min_count: e.prefix_min_count ?? t?.prefix_min_count ?? 0,
			collision: e.collision ?? t?.collision ?? "skip"
		};
		x(n), T(null), E(null);
	}, [ce, le] = (0, Q.useState)({
		location: "",
		path: ""
	}), A = ce.location === d ? ce.path : "", ue = (0, Q.useRef)({
		location: d,
		path: A
	});
	ue.current = {
		location: d,
		path: A
	};
	let [de, j] = (0, Q.useState)(null), fe = (0, Q.useRef)(null), pe = (0, Q.useRef)(null), me = (0, Q.useRef)(null), M = Z({
		queryKey: [
			"organize-example",
			_.file,
			_.dir
		],
		queryFn: ({ signal: e }) => Re(_.file, _.dir, e),
		enabled: !!i
	}), [N, ve] = (0, Q.useState)("file"), F = (0, Q.useRef)(!1), ye = (0, Q.useRef)(null);
	(0, Q.useLayoutEffect)(() => {
		let e = ye.current;
		if (!e) return;
		ye.current = null;
		let t = (e.field === "file" ? fe : pe).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let be = () => ({
		location: d,
		path: A.trim(),
		file_template: _.file.trim(),
		dir_template: _.dir.trim(),
		output_root: S.output_root,
		skip_dirs: Xt(D),
		only_dirs: Xt(O),
		prefix_min_count: Number(S.prefix_min_count) || 0,
		collision: S.collision || "skip"
	}), I = xt({
		mutationFn: nt,
		onError: (e) => {
			let t = /整理路径/.test(U(e)) ? "path" : s.test(U(e)) ? "dir" : "file";
			j(t), (t === "path" ? me : t === "dir" ? pe : fe).current?.focus();
		}
	}), L = xt({
		mutationFn: ({ initial: e }) => $e(e),
		onSuccess: (e, t) => {
			e.path && t.location === ue.current.location && t.path === ue.current.path && (le({
				location: t.location,
				path: e.path
			}), j(null), I.reset(), me.current?.focus());
		}
	}), R = X({
		queryKey: w,
		queryFn: ({ signal: e }) => Le(e),
		start: ht,
		jobOf: (e) => e,
		withJob: Ct,
		onStarted: () => I.reset(),
		onFinish: (t) => {
			if (q.invalidateQueries({
				queryKey: w,
				exact: !0
			}), t.status !== "complete") return;
			let { text: r, failed: i } = Ze(t);
			i ? n(Y("cleanup:tools.organize"), Error(Y("cleanup:organize.rowsFailed", { count: i }))) : e(r.replace(/。$/, ""));
		}
	}), xe = R.running || R.start.isPending, Se = JSON.stringify(I.variables) === JSON.stringify(be()), z = Se ? I.data : void 0, Ce = Number(z?.counts?.change || 0), we = y[d] || d, H = (e) => {
		v(e), j(null), I.reset();
	}, Te = (e) => {
		let t = (N === "file" ? fe : pe).current, n = _[N], r = F.current ? t?.selectionStart ?? n.length : n.length, i = F.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		ye.current = {
			field: N,
			caret: r + a.length
		}, H({ [N]: n.slice(0, r) + a + n.slice(i) });
	}, Ee = () => {
		if (I.isPending || xe || !d) return;
		R.dismiss(), R.start.reset(), j(null);
		let e = Xt(D), t = Xt(O);
		x({
			...S,
			skip_dirs: e,
			only_dirs: t
		}), T(null), E(null), I.mutate({
			...be(),
			skip_dirs: e,
			only_dirs: t
		});
	}, De = () => {
		let e = I.variables;
		e && z && Ce && V({
			title: Y("cleanup:tools.organize"),
			body: qt(we, e.path, {
				output_root: e.output_root || "",
				skip_dirs: e.skip_dirs || [],
				only_dirs: e.only_dirs || [],
				prefix_min_count: e.prefix_min_count || 0,
				collision: e.collision || "skip"
			}),
			confirmLabel: Y("cleanup:tools.organize"),
			onConfirm: async () => {
				await R.start.mutateAsync({
					kind: "apply",
					request: e
				}), st({
					...i?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, Oe = () => void V({
		title: Y("cleanup:organize.rollbackTitle"),
		body: Jt,
		confirmLabel: Y("cleanup:organize.rollbackConfirm"),
		onConfirm: () => R.start.mutateAsync({ kind: "rollback" })
	}), W = null, ke = !!Ce && !xe && !R.outcome, G = R.job, Ae = R.outcome;
	if (G?.status === "running") {
		let e = G.message || G.stage || Y("cleanup:organize.running");
		W = /* @__PURE__ */ (0, $.jsx)(P, {
			embedded: !0,
			label: e,
			value: Math.min(G.checked || 0, G.total || 0),
			total: G.total
		});
	} else if (Ae?.status === "failed") W = /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "error",
		title: Y("cleanup:organize.incomplete"),
		children: Ae.error || Y("cleanup:shared.checkTaskLogFiles")
	});
	else if (Ae) {
		let { text: e, failed: t } = Ze(Ae);
		W = /* @__PURE__ */ (0, $.jsx)(C, {
			tone: t ? "warning" : "success",
			title: Y(t ? "cleanup:shared.partiallyCompleted" : "cleanup:organize.result"),
			children: e
		});
	} else R.start.isError ? W = /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "error",
		title: Y("cleanup:organize.failed"),
		children: U(R.start.error)
	}) : I.isPending ? W = /* @__PURE__ */ (0, $.jsx)(P, {
		embedded: !0,
		label: Y("cleanup:organize.checkingPlan")
	}) : I.isError && Se ? W = /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "error",
		title: Y("cleanup:organize.previewFailed"),
		children: U(I.error)
	}) : z && (W = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(C, {
		tone: "neutral",
		title: Y("cleanup:organize.previewResult"),
		children: tt(z)
	}), Ce ? /* @__PURE__ */ (0, $.jsx)($t, { plan: z }) : null] }));
	let je = i?.organize_rules?.collisions ?? [{
		id: "skip",
		label: Y("cleanup:organize.collisionSkip")
	}, {
		id: "suffix",
		label: Y("cleanup:organize.collisionSuffix")
	}];
	return /* @__PURE__ */ (0, $.jsxs)(l, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			i?.last_batch ? /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "secondary",
				...B(xe),
				onClick: Oe,
				children: Y("cleanup:organize.rollbackLastBatch")
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(t, {
				variant: ke ? "secondary" : "primary",
				disabled: !a.length || xe,
				...B(I.isPending),
				onClick: Ee,
				children: Y("cleanup:organize.preview")
			}),
			ke ? /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "primary",
				onClick: De,
				children: Y("cleanup:organize.apply")
			}) : null
		] }),
		children: [
			/* @__PURE__ */ (0, $.jsx)(u, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: Y("cleanup:organize.title")
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: ae
			}),
			r.isError ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, $.jsx)(C, {
					tone: "error",
					title: Y("cleanup:organize.settingsLoadFailed"),
					children: U(r.error)
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [a.length ? /* @__PURE__ */ (0, $.jsx)(he, {
							"aria-label": Y("cleanup:organize.storageLabel"),
							prefix: Y("cleanup:organize.storagePrefix"),
							className: "w-fit min-w-25",
							selectedKey: d || null,
							onSelectionChange: (e) => {
								e !== null && (c(String(e)), le({
									location: String(e),
									path: ""
								}), j(null), I.reset(), L.reset(), F.current = !1);
							},
							children: a.map((e) => /* @__PURE__ */ (0, $.jsxs)(ge, {
								id: e.location,
								textValue: y[e.location] || e.location,
								children: [/* @__PURE__ */ (0, $.jsx)(_e, { mark: ne[e.location] || "database" }), y[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ (0, $.jsx)(m, {
								"aria-label": Y("cleanup:organize.pathLabel"),
								className: "min-w-0 flex-1",
								placeholder: Y("cleanup:organize.pathPlaceholder"),
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: A,
								ref: me,
								isInvalid: de === "path",
								onChange: (e) => {
									le({
										location: d,
										path: e
									}), j(null), I.reset(), L.reset();
								}
							}), /* @__PURE__ */ (0, $.jsx)(f, {
								icon: kt,
								"aria-label": Y("cleanup:organize.choosePath"),
								...B(L.isPending),
								onClick: () => L.mutate({
									initial: A || a.find((e) => e.location === d)?.roots[0] || "",
									location: d,
									path: A
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: ie
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: Y("cleanup:organize.codeRulesHint")
					}),
					L.isError ? /* @__PURE__ */ (0, $.jsxs)(C, {
						tone: "error",
						title: Y("cleanup:organize.pickerFailed"),
						children: [U(L.error), Y("cleanup:organize.pickerFallback")]
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: Y("cleanup:organize.fileTemplate"),
						placeholder: "{code}[ {title}]",
						value: _.file,
						ref: fe,
						spellCheck: "false",
						isInvalid: de === "file",
						onFocus: () => {
							ve("file"), F.current = !0;
						},
						onChange: (e) => H({ file: e })
					}),
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: Y("cleanup:organize.dirTemplate"),
						placeholder: Y("cleanup:organize.dirTemplatePlaceholder"),
						value: _.dir,
						ref: pe,
						spellCheck: "false",
						isInvalid: de === "dir",
						onFocus: () => {
							ve("dir"), F.current = !0;
						},
						onChange: (e) => H({ dir: e })
					}),
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: Y("cleanup:organize.outputRoot"),
						placeholder: Y("cleanup:organize.outputRootPlaceholder"),
						value: S.output_root,
						spellCheck: "false",
						onChange: (e) => k({ output_root: e })
					}),
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: Y("cleanup:organize.skipDirs"),
						placeholder: Y("cleanup:organize.skipDirsPlaceholder"),
						value: D,
						spellCheck: "false",
						onChange: (e) => {
							T(e), I.reset();
						},
						onBlur: () => k({ skip_dirs: Xt(D) })
					}),
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: Y("cleanup:organize.onlyDirs"),
						placeholder: Y("cleanup:organize.onlyDirsPlaceholder"),
						value: O,
						spellCheck: "false",
						onChange: (e) => {
							E(e), I.reset();
						},
						onBlur: () => k({ only_dirs: Xt(O) })
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)(m, {
							label: Y("cleanup:organize.prefixThreshold"),
							className: "w-40",
							placeholder: Y("cleanup:organize.prefixThresholdPlaceholder"),
							value: String(S.prefix_min_count ?? 0),
							spellCheck: "false",
							onChange: (e) => {
								let t = e.replace(/[^\d]/g, "");
								k({ prefix_min_count: t === "" ? 0 : Number(t) });
							}
						}), /* @__PURE__ */ (0, $.jsx)(he, {
							"aria-label": Y("cleanup:organize.collisionAria"),
							prefix: Y("cleanup:organize.collisionPrefix"),
							className: "w-fit min-w-40",
							selectedKey: S.collision || "skip",
							onSelectionChange: (e) => {
								e !== null && k({ collision: String(e) });
							},
							children: je.map((e) => /* @__PURE__ */ (0, $.jsx)(ge, {
								id: e.id,
								textValue: Qt(e.id, e.label),
								children: Qt(e.id, e.label)
							}, e.id))
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: Y("cleanup:organize.rulesHint")
					}),
					i?.presets?.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": Y("cleanup:organize.applyPreset"),
						children: [/* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-caption-1-medium text-text-secondary",
							children: Y("cleanup:organize.applyPreset")
						}), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: i.presets.map((e) => /* @__PURE__ */ (0, $.jsx)(t, {
								variant: "secondary",
								size: "small",
								title: e.example || e.label,
								className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
								onClick: () => {
									H({
										file: e.file,
										dir: e.dir
									}), e.javorg_mode || e.output_root !== void 0 || e.collision ? se(e) : (x({ ...Kt }), T(null), E(null)), F.current = !1, I.reset();
								},
								children: /* @__PURE__ */ (0, $.jsx)("span", {
									className: "truncate",
									children: e.label
								})
							}, e.label))
						})]
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("p", {
						"aria-live": "polite",
						"aria-busy": M.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: [
							Y("cleanup:organize.examplePath"),
							/* @__PURE__ */ (0, $.jsx)("code", {
								className: "wrap-anywhere",
								children: M.data?.example || M.data?.error || (M.isError ? U(M.error) : Y("cleanup:organize.previewLoading"))
							}),
							S.output_root ? Y("cleanup:organize.exampleOutputRoot", { root: S.output_root }) : null
						]
					}),
					i?.placeholders?.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": Y("cleanup:organize.insertParameter"),
						children: [/* @__PURE__ */ (0, $.jsxs)("p", {
							className: "text-caption-1-regular text-text-secondary",
							"aria-live": "polite",
							children: [/* @__PURE__ */ (0, $.jsx)("strong", {
								className: "text-caption-1-semibold text-text-primary",
								children: Y("cleanup:organize.insertParameter")
							}), Y("cleanup:organize.insertTarget", { target: Y(N === "file" ? "cleanup:organize.fileTemplate" : "cleanup:organize.dirTemplate") })]
						}), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: i.placeholders.map((e) => /* @__PURE__ */ (0, $.jsx)(t, {
								variant: "ghost",
								size: "small",
								"aria-label": `${e.label} {${e.key}}`,
								onClick: () => Te(e.key),
								children: /* @__PURE__ */ (0, $.jsxs)("span", {
									className: "inline-flex flex-wrap items-center gap-x-1.5",
									children: [/* @__PURE__ */ (0, $.jsx)("code", { children: `{${e.key}}` }), /* @__PURE__ */ (0, $.jsx)("span", {
										className: "text-text-secondary",
										children: e.label
									})]
								})
							}, e.key))
						})]
					}) : null,
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-caption-1-regular leading-4.5 text-text-secondary",
						children: re
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				"aria-live": "polite",
				className: "mt-3 flex flex-col gap-2 empty:hidden",
				children: W
			})
		]
	});
}
// src/react/data-cleanup/orphan-records-card.tsx
var tn = J("play"), nn = () => q.invalidateQueries({
	queryKey: T,
	exact: !0
});
function rn({ item: e, toast: n }) {
	let [r, i] = (0, Q.useState)(e.candidates[0]?.id ?? null), a = xt({
		mutationFn: () => Se(e.id, Number(r)),
		onSuccess: () => {
			let t = e.candidates.find((e) => e.id === r);
			n(Y("cleanup:orphans.attached", {
				name: e.name,
				target: t?.name ?? Y("cleanup:orphans.selectedFile")
			})), nn();
		},
		onError: (e) => n(U(e))
	}), o = xt({
		mutationFn: () => at(e.id),
		onSuccess: (t) => {
			n(t.blocked.length ? Y("cleanup:orphans.fileRestored", { name: e.name }) : Y("cleanup:orphans.recordDeleted", { name: e.name })), nn();
		}
	}), s = () => {
		V({
			title: Y("cleanup:orphans.deleteRecord"),
			body: ot(e.records) ? Y("cleanup:orphans.deleteBodyWithActivity", {
				name: e.name,
				records: ot(e.records)
			}) : Y("cleanup:orphans.deleteBody", { name: e.name }),
			confirmLabel: Y("cleanup:orphans.deleteRecord"),
			danger: !0,
			onConfirm: () => o.mutateAsync()
		});
	}, c = a.isPending || o.isPending;
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, $.jsx)(t, {
				variant: "danger",
				size: "small",
				...B(c),
				onClick: s,
				children: Y("cleanup:orphans.deleteRecord")
			}),
			e.candidates.length ? /* @__PURE__ */ (0, $.jsx)(he, {
				"aria-label": Y("cleanup:orphans.targetLabel", { name: e.name }),
				prefix: Y("cleanup:orphans.targetPrefix"),
				className: "w-52",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: e.candidates.map((e) => /* @__PURE__ */ (0, $.jsx)(ge, {
					id: e.id,
					textValue: Ce(e),
					children: Ce(e)
				}, e.id))
			}) : null,
			e.candidates.length ? /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "primary",
				size: "small",
				disabled: r === null,
				...B(c),
				onClick: () => a.mutate(),
				children: Y("cleanup:orphans.moveActivity")
			}) : null
		]
	});
}
function an({ item: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, $.jsxs)("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ (0, $.jsx)(tn, {
				"aria-hidden": !0,
				className: "size-5"
			}), e.has_thumb ? /* @__PURE__ */ (0, $.jsx)("img", {
				src: `/thumb?id=${e.id}&c=4`,
				alt: "",
				loading: "lazy",
				onError: (e) => e.currentTarget.remove(),
				className: "absolute inset-0 size-full object-contain"
			}) : null]
		}), /* @__PURE__ */ (0, $.jsxs)("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				title: e.name,
				className: "truncate text-body-regular text-text-primary",
				children: e.name
			}), /* @__PURE__ */ (0, $.jsx)("small", {
				className: "truncate text-caption-1-regular text-text-secondary",
				children: [e.code, y[e.location] || e.location].filter(Boolean).join(" · ")
			})]
		})]
	});
}
function on({ toast: e }) {
	let [n, r] = (0, Q.useState)([]), i = Z({
		queryKey: T,
		queryFn: ({ signal: e }) => ze(e)
	}), a = i.data?.items ?? [], o = xt({
		mutationFn: (e) => at(e),
		onSuccess: (t) => {
			e(Y("cleanup:orphans.purged", { count: t.purged }) + (t.blocked.length ? Y("cleanup:orphans.purgedBlocked", { count: t.blocked.length }) : "")), r([]), nn();
		}
	}), s = (e) => void V({
		title: Y("cleanup:orphans.deleteSelectedTitle"),
		body: Y("cleanup:orphans.deleteSelectedBody", { count: e.length }),
		items: e.map((e) => e.name),
		confirmLabel: Y("cleanup:orphans.deleteSelectedTitle"),
		danger: !0,
		onConfirm: () => o.mutateAsync(e.map((e) => e.id))
	}), c = [
		{
			id: "item",
			label: Y("cleanup:shared.video"),
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ (0, $.jsx)(an, { item: e })
		},
		{
			id: "records",
			label: Y("cleanup:orphans.columnActivity"),
			width: 176,
			min: 144,
			value: (e) => ot(e.records),
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: ot(e.records) || Y("cleanup:shared.none")
			})
		},
		{
			id: "target",
			label: Y("cleanup:shared.actions"),
			width: a.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (t) => /* @__PURE__ */ (0, $.jsx)(rn, {
				item: t,
				toast: e
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsx)("section", {
		id: "orphan-records",
		"aria-labelledby": "orphan-records-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: i.isError ? /* @__PURE__ */ (0, $.jsxs)(l, {
			layout: "stack",
			labelledBy: "orphan-records-title",
			children: [/* @__PURE__ */ (0, $.jsx)(u, {
				id: "orphan-records-title",
				children: Y("cleanup:tools.orphanRecords")
			}), /* @__PURE__ */ (0, $.jsx)(C, {
				tone: "error",
				title: Y("cleanup:orphans.loadFailed"),
				children: U(i.error)
			})]
		}) : /* @__PURE__ */ (0, $.jsx)(Et, {
			label: Y("cleanup:orphans.tableLabel"),
			items: a,
			columns: c,
			title: Y("cleanup:tools.orphanRecords"),
			titleId: "orphan-records-title",
			unit: Y("cleanup:orphans.unit"),
			description: oe,
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: n,
			onSelected: r,
			actions: (e) => /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "danger",
				size: "small",
				disabled: !e.length,
				...B(o.isPending),
				onClick: () => s(e),
				children: Y("cleanup:orphans.deleteSelectedCount", { count: e.length })
			})
		})
	});
}
// src/react/data-cleanup/performer-delete-card.tsx
function sn({ person: e }) {
	let t = Ee("performer", e.k, e.entity_id);
	return /* @__PURE__ */ (0, $.jsxs)("a", {
		href: Oe("performer", e.k, e.entity_id),
		title: t,
		className: "flex min-w-0 items-center gap-3 text-text-primary",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			"aria-hidden": !0,
			className: H("relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium", Ot),
			dangerouslySetInnerHTML: { __html: `<span>${W(Ke(t))}</span>` + De({
				kind: "performer",
				id: e.entity_id,
				hasImage: e.has_image,
				version: e.image_version,
				focus: e.avatar_focus,
				thumb: !0
			}) }
		}), /* @__PURE__ */ (0, $.jsx)("span", {
			className: "min-w-0 wrap-anywhere",
			children: t
		})]
	});
}
function cn(e, t, n) {
	let r = (e) => e.slice(0, 5).join(Y("cleanup:shared.listSeparator")), i = e.length > 5 ? Y("cleanup:performerDelete.moreNames", {
		names: r(e),
		total: e.length
	}) : r(e), a = t.length > 5 ? Y("cleanup:performerDelete.moreExamples", {
		examples: r(t),
		total: t.length
	}) : r(t);
	return [
		Y("cleanup:performerDelete.bodyScope", {
			names: i,
			count: n.total,
			size: K(n.bytes)
		}),
		Y("cleanup:performerDelete.bodyWarning"),
		...n.shared ? [Y("cleanup:performerDelete.sharedFiles", { count: n.shared })] : [],
		Y("cleanup:performerDelete.bodyExamples", { examples: a })
	].join(Y("cleanup:shared.sentenceGap"));
}
function ln({ toast: n }) {
	bt();
	let r = Z({
		queryKey: E,
		queryFn: ({ signal: e }) => ke(e)
	}), [i, a] = (0, Q.useState)([]), [o, s] = (0, Q.useState)(""), [c, d] = (0, Q.useState)(!1), [f, m] = (0, Q.useState)(null), [h, g] = (0, Q.useState)(""), _ = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => () => _.current?.abort(), []);
	let v = (0, Q.useMemo)(() => [
		{
			id: "name",
			label: Y("cleanup:shared.actress"),
			width: 280,
			min: 160,
			value: (e) => e.k,
			render: (e) => /* @__PURE__ */ (0, $.jsx)(sn, { person: e })
		},
		{
			id: "works",
			label: Y("cleanup:shared.videos"),
			width: 104,
			min: 80,
			value: (e) => e.n,
			render: (e) => Y("cleanup:performerDelete.videoCount", { count: e.n })
		},
		{
			id: "files",
			label: Y("cleanup:shared.files"),
			width: 104,
			min: 80,
			value: (e) => e.file_count,
			render: (e) => Y("cleanup:performerDelete.fileCount", { count: e.file_count })
		},
		{
			id: "bytes",
			label: Y("cleanup:performerDelete.columnSize"),
			width: 136,
			min: 104,
			value: (e) => e.bytes,
			render: (e) => K(e.bytes)
		}
	], []), ee = o.toLocaleLowerCase(), y = (r.data?.items || []).filter((e) => !ee || [
		e.k,
		Ee("performer", e.k, e.entity_id),
		...e.aliases
	].some((e) => e.toLocaleLowerCase().includes(ee))), b = async (e, t) => {
		if (c) return;
		d(!0), g("");
		let r = new AbortController();
		_.current = r;
		try {
			let i = await G(e.map((e) => e.entity_id), r.signal);
			if (r.signal.throwIfAborted(), !i.total) {
				n(Y("cleanup:performerDelete.nothingToDelete"));
				return;
			}
			let a = i.performers.map((e) => Ee("performer", e.name, e.id)), o = [...new Set(i.items.map((e) => e.code || e.name || `#${e.id}`))], s = await V({
				title: Y("cleanup:performerDelete.confirmTitle"),
				body: cn(a, o, i),
				confirmLabel: Y("cleanup:performerDelete.confirm"),
				danger: !0,
				onConfirm: () => Te(i)
			});
			if (!s.confirmed) return;
			let c = s.result;
			m(c), t(), await Promise.all([q.invalidateQueries({
				queryKey: E,
				exact: !0
			}), q.invalidateQueries({
				queryKey: ve,
				exact: !0
			})]), n(Y("cleanup:performerDelete.purged", { count: c.purged }) + (c.blocked.length ? Y("cleanup:performerDelete.doneBlocked", { count: c.blocked.length }) : ""));
		} catch (e) {
			r.signal.aborted || g(U(e));
		} finally {
			r.signal.aborted || d(!1);
		}
	}, x = f ? [
		...f.blocked,
		...f.cleanup_pending,
		...f.cache_blocked.map((e) => ({
			path: e.name,
			reason: e.reason
		}))
	] : [];
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "batch-delete",
		className: "flex min-w-0 scroll-mt-20 flex-col gap-3",
		"aria-label": Y("cleanup:tools.bulkDelete"),
		children: [
			r.isPending || r.isError ? /* @__PURE__ */ (0, $.jsxs)(l, {
				layout: "stack",
				labelledBy: "batch-delete-title",
				children: [/* @__PURE__ */ (0, $.jsx)(u, {
					id: "batch-delete-title",
					children: Y("cleanup:tools.bulkDelete")
				}), r.isError ? /* @__PURE__ */ (0, $.jsx)(C, {
					tone: "error",
					title: Y("cleanup:performerDelete.loadFailed"),
					action: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "secondary",
						size: "small",
						onClick: () => void r.refetch(),
						children: Y("cleanup:shared.retry")
					}),
					children: U(r.error)
				}) : /* @__PURE__ */ (0, $.jsx)("p", {
					role: "status",
					className: "text-body-regular text-text-secondary",
					children: Y("cleanup:performerDelete.loading")
				})]
			}) : /* @__PURE__ */ (0, $.jsx)(Et, {
				label: Y("cleanup:performerDelete.tableLabel"),
				title: Y("cleanup:tools.bulkDelete"),
				titleId: "batch-delete-title",
				unit: Y("cleanup:performerDelete.unit"),
				description: e,
				items: y,
				columns: v,
				rowId: (e) => String(e.entity_id),
				rowLabel: (e) => Ee("performer", e.k, e.entity_id),
				selected: i,
				onSelected: a,
				toolbarActions: /* @__PURE__ */ (0, $.jsx)(p, {
					label: Y("cleanup:performerDelete.search"),
					value: o,
					onQuery: (e) => {
						s(e), a([]);
					}
				}),
				actions: (e, n) => /* @__PURE__ */ (0, $.jsx)(t, {
					variant: "danger",
					size: "small",
					...B(c),
					onClick: () => void b(e, n),
					children: Y("cleanup:performerDelete.deleteSelected")
				})
			}),
			h ? /* @__PURE__ */ (0, $.jsx)(C, {
				tone: "error",
				title: Y("cleanup:performerDelete.planFailed"),
				children: h
			}) : null,
			f ? /* @__PURE__ */ (0, $.jsx)(C, {
				tone: x.length ? "warning" : "info",
				title: Y("cleanup:performerDelete.purged", { count: f.purged }),
				extra: x.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex flex-col gap-2 text-body-2-regular wrap-anywhere",
					children: x.slice(0, 5).map((e, t) => /* @__PURE__ */ (0, $.jsxs)("p", { children: [
						e.path,
						"（",
						e.reason,
						"）"
					] }, t))
				}) : null,
				children: x.length ? Y("cleanup:performerDelete.partialFailure", {
					count: f.blocked.length,
					quarantined: f.cleanup_pending.length,
					cacheFiles: f.cache_blocked.length
				}) : Y("cleanup:performerDelete.done")
			}) : null
		]
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var un = J("git-compare"), dn = J("rotate-cw"), fn = Y("cleanup:shared.reconnecting"), pn = Y("cleanup:resourceSync.cleanUpDead"), mn = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", hn = (e) => Number(e || 0).toLocaleString();
function gn({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
		className: mn,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ (0, $.jsxs)("article", {
			className: et(),
			children: [/* @__PURE__ */ (0, $.jsx)(O, {
				label: me[e.location] || Y("cleanup:resourceSync.storageFallback"),
				mark: /* @__PURE__ */ (0, $.jsx)(_e, { mark: ne[e.location] ?? "database" }),
				aside: /* @__PURE__ */ (0, $.jsx)(At, {
					online: e.online,
					children: e.online ? Y("cleanup:resourceSync.online") : Y("cleanup:resourceSync.offline")
				}),
				figure: e.online ? Y("cleanup:resourceSync.missingCount", { count: Number(e.missing || 0) }) : "—",
				meta: e.online ? ft(e) : Y("cleanup:resourceSync.skipped", { summary: ft(e) }),
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsxs)(N, {
					tone: "warning",
					children: [
						hn(e.unreadable),
						" ",
						Y("cleanup:resourceSync.unreadableDirs")
					]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ (0, $.jsxs)("div", {
		className: mn,
		children: [
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: et(),
				children: /* @__PURE__ */ (0, $.jsx)(O, {
					label: Y("cleanup:resourceSync.toPurge"),
					figure: Y("cleanup:resourceSync.purgeCount", { count: Number(it(e) || 0) }),
					meta: Y("cleanup:resourceSync.purgeHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: et(),
				children: /* @__PURE__ */ (0, $.jsx)(O, {
					label: Y("cleanup:resourceSync.toVanish"),
					figure: Y("cleanup:resourceSync.vanishCount", { count: Number(e.vanish || 0) }),
					meta: Y("cleanup:resourceSync.vanishHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: et(),
				children: /* @__PURE__ */ (0, $.jsx)(O, {
					label: Y("cleanup:resourceSync.emptyDirs"),
					figure: Y("cleanup:resourceSync.emptyDirCount", { count: Number(e.empty || 0) }),
					meta: Y("cleanup:resourceSync.emptyDirsHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: et(),
				children: /* @__PURE__ */ (0, $.jsx)(O, {
					label: Y("cleanup:resourceSync.cache"),
					figure: Y("cleanup:resourceSync.cacheCount", { count: Number(n.files || 0) }),
					meta: n.files ? K(n.bytes) : ""
				})
			})
		]
	})] });
}
function _n({ toast: e }) {
	let n = X({
		queryKey: A,
		queryFn: ({ signal: e }) => He(e),
		start: gt,
		onFinish: (t) => {
			if (q.invalidateQueries({
				queryKey: ve,
				exact: !0
			}), q.invalidateQueries({
				queryKey: ue,
				exact: !0
			}), t.status !== "complete") return;
			let { done: n, left: r } = L(t);
			r ? e(Y("cleanup:resourceSync.applyLeftovers", {
				done: hn(n),
				count: Number(r || 0)
			}), { warning: !0 }) : e(Y("cleanup:resourceSync.cleaned"));
		}
	}), r = X({
		queryKey: ue,
		queryFn: ({ signal: e }) => Ue(e),
		start: _t,
		onStarted: () => n.dismiss()
	}), i = r.job, a = r.running || r.start.isPending, o = n.running || n.start.isPending, s = !!r.job && !!n.job, c = i?.status === "complete" || i?.status === "failed", d = Y(a ? "cleanup:resourceSync.scanning" : c ? "cleanup:resourceSync.scanAgain" : "cleanup:resourceSync.checkFiles"), f = (e) => void V({
		title: pn,
		body: I(e),
		confirmLabel: pn,
		danger: !0,
		onConfirm: () => n.start.mutateAsync(e.scan_id || "")
	}), p = n.outcome, m = (e) => {
		let t = L(e).left > 0;
		return /* @__PURE__ */ (0, $.jsx)(C, {
			tone: t ? "warning" : "success",
			title: Y(t ? "cleanup:shared.partiallyCompleted" : "cleanup:resourceSync.cleanupResult"),
			children: xe(e, K)
		});
	}, h = null, g = null;
	if (p?.status === "failed") g = /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "error",
		title: Y("cleanup:resourceSync.cleanupIncomplete"),
		children: p.error || Y("cleanup:shared.checkTaskLogFiles")
	});
	else if (p) g = m(p);
	else if (n.running) h = /* @__PURE__ */ (0, $.jsx)(P, {
		embedded: !0,
		label: n.job?.message || Y("cleanup:resourceSync.applying")
	});
	else if (r.start.isError) g = /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "error",
		title: Y("cleanup:resourceSync.scanFailed"),
		children: U(r.start.error)
	});
	else if (r.query.isError && i) g = /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "neutral",
		title: Y("cleanup:shared.taskStatus"),
		children: fn
	});
	else if (i?.status === "running") {
		let e = dt(i);
		h = /* @__PURE__ */ (0, $.jsx)(P, {
			embedded: !0,
			label: e,
			value: i.completed_sources,
			total: i.total_sources
		}), i.sources?.length && (g = /* @__PURE__ */ (0, $.jsx)(gn, {
			scan: i,
			partial: !0
		}));
	} else if (i?.status === "failed") g = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [i.sources?.length ? /* @__PURE__ */ (0, $.jsx)(gn, {
		scan: i,
		partial: !0
	}) : null, /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "error",
		title: Y("cleanup:resourceSync.scanFailed"),
		children: i.error || Y("cleanup:resourceSync.backgroundScanFailed")
	})] });
	else if (i?.status === "complete" && i.applied) g = n.job?.status === "complete" ? m(n.job) : /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "neutral",
		title: Y("cleanup:resourceSync.cleanupResult"),
		children: Y("cleanup:resourceSync.alreadyCleaned")
	});
	else if (i?.status === "complete") {
		let e = qe(i);
		g = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(gn, { scan: i }), e ? /* @__PURE__ */ (0, $.jsx)(C, {
			tone: "neutral",
			title: Y("cleanup:resourceSync.toClean"),
			action: /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "danger",
				disabled: !s,
				...B(o),
				onClick: () => {
					s && f(i);
				},
				children: o ? Y("cleanup:resourceSync.applyingButton") : pn
			}),
			children: R(i)
		}) : /* @__PURE__ */ (0, $.jsx)("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: Y("cleanup:resourceSync.nothingToClean")
		})] });
	}
	return n.start.isError && !p && (g = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [g, /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "error",
		title: Y("cleanup:resourceSync.cleanupFailed"),
		children: U(n.start.error)
	})] })), /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsxs)(l, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ (0, $.jsx)(t, {
				"data-resource-scan": !0,
				leadingIcon: c && !a ? dn : un,
				disabled: !s,
				...B(a),
				onClick: () => {
					s && !a && r.start.mutate();
				},
				children: d
			}),
			children: [
				/* @__PURE__ */ (0, $.jsx)(u, {
					id: "resource-sync-title",
					gap: "small",
					children: Y("cleanup:tools.resourceSync")
				}),
				r.query.isPending || n.query.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
					role: "status",
					"aria-label": Y("cleanup:resourceSync.statusLoading"),
					"data-skeleton": "",
					className: "skeleton-sheen h-6 rounded-md"
				}) : null,
				!r.job && r.query.isError ? /* @__PURE__ */ (0, $.jsx)(C, {
					tone: "error",
					children: Y("cleanup:resourceSync.scanStatusUnavailable")
				}) : null,
				!n.job && n.query.isError ? /* @__PURE__ */ (0, $.jsx)(C, {
					tone: "error",
					children: Y("cleanup:resourceSync.applyStatusUnavailable")
				}) : null,
				/* @__PURE__ */ (0, $.jsx)("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: de
				}),
				/* @__PURE__ */ (0, $.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 empty:hidden",
					children: h
				})
			]
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: g
		})]
	});
}
// src/react/data-cleanup/data-cleanup-tool-page.tsx
function vn({ toast: e }) {
	let t = Z({
		queryKey: te,
		queryFn: ({ signal: e }) => Ie(e)
	});
	return t.isError ? /* @__PURE__ */ (0, $.jsx)(C, {
		tone: "error",
		title: Y("cleanup:resourceSync.storageLoadFailed"),
		children: U(t.error)
	}) : t.isPending ? /* @__PURE__ */ (0, $.jsx)("p", {
		role: "status",
		children: Y("cleanup:resourceSync.storageLoading")
	}) : Je(t.data) ? /* @__PURE__ */ (0, $.jsx)(_n, { toast: e }) : /* @__PURE__ */ (0, $.jsxs)(l, {
		layout: "stack",
		label: Y("cleanup:tools.resourceSync"),
		children: [
			/* @__PURE__ */ (0, $.jsx)(u, { children: Y("cleanup:tools.resourceSync") }),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: Y("cleanup:resourceSync.noDirectories")
			}),
			/* @__PURE__ */ (0, $.jsx)("a", {
				href: "/settings/library",
				className: "text-body-medium text-accent-600 underline",
				children: Y("cleanup:resourceSync.setUpLibrary")
			})
		]
	});
}
function yn({ tool: e, toast: t, failure: n }) {
	let r = (e) => t(e), i;
	switch (e) {
		case "organize":
			i = /* @__PURE__ */ (0, $.jsx)(en, {
				toast: r,
				failure: n
			});
			break;
		case "resource-sync":
			i = /* @__PURE__ */ (0, $.jsx)(vn, { toast: t });
			break;
		case "orphan-records":
			i = /* @__PURE__ */ (0, $.jsx)(on, { toast: r });
			break;
		case "media-repair":
			i = /* @__PURE__ */ (0, $.jsx)(Ft, { toast: r });
			break;
		case "links":
			i = /* @__PURE__ */ (0, $.jsx)(Gt, {});
			break;
		case "batch-delete": i = /* @__PURE__ */ (0, $.jsx)(ln, { toast: r });
	}
	return /* @__PURE__ */ (0, $.jsx)(wt, { children: i });
}
// src/react/data-cleanup/data-cleanup-page.tsx
function bn(e, t) {
	return e.data === void 0 ? e.isError ? {
		figure: Y("cleanup:overview.loadFailed"),
		state: "error"
	} : {
		figure: Y("cleanup:overview.loading"),
		state: "loading"
	} : t(e.data);
}
function xn({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ (0, $.jsx)("button", {
		type: "button",
		className: et({ interactive: !0 }),
		"data-cleanup-go": e,
		"data-entry-state": r.state,
		"aria-busy": r.state === "loading" || void 0,
		onClick: () => i(e),
		children: /* @__PURE__ */ (0, $.jsx)(O, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
function Sn({ tool: e, navigate: t }) {
	let n = J(e.icon);
	return /* @__PURE__ */ (0, $.jsx)(Mt, {
		label: e.title,
		icon: n,
		summary: e.description,
		attributes: { "data-cleanup-tool": e.key },
		onOpen: () => t(e.path + location.search)
	});
}
var Cn = J("square-check-big"), wn = J("sparkles"), Tn = J("file-stack"), En = J("file-archive"), Dn = J("trash"), On = () => {
	for (let e of [
		pe,
		se,
		c,
		h
	]) q.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function kn({ toast: e, open: t, navigate: n }) {
	let o = Z({
		queryKey: pe,
		queryFn: ({ signal: e }) => We(e)
	}), s = Z({
		queryKey: se,
		queryFn: ({ signal: e }) => Be(e)
	}), l = Z({
		queryKey: c,
		queryFn: ({ signal: e }) => Ae(e)
	}), u = Z({
		queryKey: h,
		queryFn: ({ signal: e }) => je(e)
	}), d = Z({
		queryKey: ve,
		queryFn: ({ signal: e }) => Ge(e)
	});
	return (0, Q.useEffect)(() => {
		let e = i[location.hash];
		e && Qe.replace(e + location.search);
	}, []), /* @__PURE__ */ (0, $.jsxs)(wt, { children: [
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-pending",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(M, {
				id: "cleanup-pending",
				children: Y("cleanup:overview.needsAttention")
			}), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: D,
				children: [
					/* @__PURE__ */ (0, $.jsx)(xn, {
						section: "review",
						label: Y("cleanup:overview.review"),
						icon: Cn,
						open: t,
						value: bn(o, ut)
					}),
					/* @__PURE__ */ (0, $.jsx)(xn, {
						section: "duplicates",
						label: Y("cleanup:overview.duplicates"),
						icon: Tn,
						open: t,
						value: bn(l, (e) => Number(e.total || 0) ? {
							figure: Y("cleanup:overview.duplicateGroups", {
								count: Number(e.total),
								files: Number(e.files || 0).toLocaleString()
							}),
							meta: Y("cleanup:overview.reclaimable", { size: K(e.reclaimable || 0) })
						} : { figure: Y("cleanup:overview.noDuplicates") })
					}),
					/* @__PURE__ */ (0, $.jsx)(xn, {
						section: "ads",
						label: Y("cleanup:overview.junkFiles"),
						icon: En,
						open: t,
						value: bn(u, (e) => ({
							figure: Y("cleanup:overview.junkUndecided", { count: Number(e.pending_total || 0) }),
							meta: Ye(e)
						}))
					}),
					/* @__PURE__ */ (0, $.jsx)(xn, {
						section: "quality",
						label: Y("cleanup:overview.hdUpgrades"),
						icon: wn,
						open: t,
						value: bn(s, (e) => ({ figure: Y("cleanup:overview.upgradesPending", { count: Number(e.total || 0) }) }))
					}),
					/* @__PURE__ */ (0, $.jsx)(xn, {
						section: "trash",
						label: Y("cleanup:overview.trash"),
						icon: Dn,
						open: t,
						value: bn(d, (e) => ({
							figure: Y("cleanup:overview.trashCount", { count: Number(e.total || 0) }),
							meta: e.total ? Y("cleanup:overview.trashSize", { size: K(e.bytes || 0) }) : Y("cleanup:overview.trashEmptyHint")
						}))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, $.jsx)("div", {
			id: "libraryProcessing",
			className: "scroll-mt-20",
			children: /* @__PURE__ */ (0, $.jsx)(b, {
				toast: (t) => e(t),
				monitor: !0,
				onComplete: On
			})
		}),
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-maintenance",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(M, {
				id: "cleanup-maintenance",
				children: Y("cleanup:overview.maintenanceSection")
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: r,
				children: a.filter((e) => e.key !== "batch-delete").map((e) => /* @__PURE__ */ (0, $.jsx)(Sn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		}),
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-deletion",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(M, {
				id: "cleanup-deletion",
				children: Y("cleanup:overview.deletionSection")
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: r,
				children: a.filter((e) => e.key === "batch-delete").map((e) => /* @__PURE__ */ (0, $.jsx)(Sn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		})
	] });
}
export { kn as DataCleanupPage, yn as DataCleanupToolPage };

//# debugId=12fe5f47-9863-4edd-8a86-3d2b62bf40e8