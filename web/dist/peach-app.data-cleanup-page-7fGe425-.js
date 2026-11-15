(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b0436991-673b-4a80-84b9-d1596fe944b9", e._sentryDebugIdIdentifier = "sentry-dbid-b0436991-673b-4a80-84b9-d1596fe944b9");
	} catch {}
})();
import { BATCH_DELETE_TEXT as e, Button as t, CLEANUP_ENTRY as n, CLEANUP_ENTRY_GRID as r, CLEANUP_HASH_REDIRECTS as i, CLEANUP_TOOLS as a, Chip as o, DIRECTORY_TEMPLATE_ERROR as s, DUPLICATES_KEY as c, Fieldset as l, FieldsetTitle as u, IDLE_REPAIR as d, IconButton as f, IndexSearch as p, Input as m, JUNK_KEY as h, LINKS_KEY as g, LINK_CHECK_KEY as _, LINK_KINDS as v, LINK_PRUNE_KEY as ee, LOC as y, LibraryLabel as b, LibraryProcessingCard as x, MEDIA_REPAIR_KEY as S, MEDIA_REPAIR_URL as te, MEDIA_SOURCES_KEY as C, MEDIA_SOURCE_ICONS as w, Note as T, ORGANIZE_KEY as ne, ORGANIZE_PARAMETER_HINT as re, ORGANIZE_SCOPE_HINT as ie, ORGANIZE_TEXT as E, ORPHAN_RECORDS_KEY as ae, ORPHAN_RECORDS_TEXT as D, PERFORMER_DELETE_KEY as O, PLAIN_STAT_STRIP as oe, PlainStat as k, Progress as se, QUALITY_GOALS_KEY as ce, REPAIR_CARD_TEXT as le, REPAIR_LIBRARIES_KEY as A, RESOURCE_APPLY_KEY as ue, RESOURCE_SCAN_KEY as de, RESOURCE_SYNC_TEXT as j, RESULT_PANEL as fe, RESULT_SECTION as pe, REVIEW_COUNTS_KEY as me, SOURCE_LABELS as he, SectionHeading as M, Select as ge, SelectItem as _e, SourceLabel as ve, SourceMark as ye, StatusLabel as N, TRASH_KEY as P, TaskProgress as F, Wt as be, __toESM as I, activityKind as L, apiSend as R, applyConfirmText as z, applyLeftovers as B, applyPlanText as xe, applyText as V, attachOrphan as Se, baseName as Ce, busyProps as H, candidateText as we, checkLine as Te, codedText as Ee, confirmModal as U, cx as De, deletePerformerVideos as Oe, entityDisplayName as ke, entityFaceImg as W, entityPath as Ae, errorMessage as G, esc as K, fetchDeletePerformers as je, fetchDeletePlan as Me, fetchDuplicates as Ne, fetchJunkSummary as Pe, fetchLinkCheck as Fe, fetchLinkPrune as Ie, fetchLinkStats as Le, fetchMediaRepair as Re, fetchMediaSources as ze, fetchOrganize as Be, fetchOrganizeExample as Ve, fetchOrphanRecords as He, fetchQualityGoals as Ue, fetchRepairLibraries as We, fetchResourceApply as Ge, fetchResourceScan as Ke, fetchReviewCounts as qe, fetchTrashSummary as Je, firstGrapheme as Ye, fmtSize as Xe, hasChanges as Ze, hasResourceRoots as Qe, jobText as q, junkBreakdown as $e, linkLabel as et, missingToolText as tt, organizeOutcome as nt, peachHistory$1 as rt, pickOrganizeFolder as it, plainStatClass as at, planSummary as ot, previewOrganize as st, pruneText as ct, purgeCount as lt, purgeOrphan as ut, queryClient as J, recordsText as dt, rememberTemplates as ft, require_jsx_runtime as pt, require_react as mt, reviewSummary as ht, scanLine as gt, serverLabel as _t, sourceMeta as vt, spriteGlyph as Y, stageText as yt, startLinkCheck as bt, startLinkPrune as xt, startOrganize as St, startResourceApply as Ct, startResourceScan as wt, statusLine as Tt, t as X, useAction as Et, useBackgroundJob as Dt, useEntityNames as Ot, useMutation as kt, useOrderedLibraries as At, useQuery as Z, withOrganizeJob as jt } from "./peach-app.js";
import { Page as Mt } from "./peach-app.page-QAncjzM1.js";
import { ErrorExcerpt as Nt } from "./peach-app.error-excerpt-Ugft6I5o.js";
import { DataTable as Pt } from "./peach-app.data-table-C4egVbd2.js";
import { SiteMark as Ft } from "./peach-app.site-mark-D_VlIyJz.js";
import { LEGACY_AVATAR_IMG as It } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as Lt } from "./peach-app.folder-rows-C3hhF_90.js";
import { ConnectionStatus as Rt } from "./peach-app.connection-status-BrXhLGSm.js";
// src/react/data-cleanup/cleanup-entry-card.tsx
var Q = /* @__PURE__ */ I(mt(), 1), $ = pt(), zt = Y("chevron-right");
function Bt({ label: e, icon: t, summary: r, detail: i, state: a, attributes: o, onOpen: s }) {
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
						className: De(n.summary, a === "error" && "text-text-error-primary"),
						children: r
					}),
					i ? /* @__PURE__ */ (0, $.jsx)("span", {
						className: n.detail,
						children: i
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(zt, {
				"aria-hidden": !0,
				className: n.arrow
			})
		]
	});
}
// src/react/media-repair/media-repair-card.tsx
var Vt = (e) => w[e] || e, Ht = (e) => J.setQueryData(S, e);
function Ut({ toast: e = () => {} }) {
	let n = Dt({
		queryKey: S,
		queryFn: ({ signal: e }) => Re(e),
		start: (e) => R(te, {
			library: e,
			restart: !0
		}),
		onFinish: (t) => {
			t.status === "complete" && !t.failed && !t.missing_tool && e(t.repaired ? X("cleanup:mediaRepair.repaired", { count: t.repaired }) : X("cleanup:mediaRepair.nothingToRepair"));
		}
	}), r = Z({
		queryKey: A,
		queryFn: ({ signal: e }) => We(e)
	}), [i, a] = (0, Q.useState)(""), o = Et(), s = n.job ?? d, c = At(r.data ?? [], (e) => e.id), f = s.status === "running", p = c.find((e) => e.id === (f ? s.library : i)) ?? c.find((e) => e.id === s.library) ?? c[0], m = () => {
		p && U({
			title: X("cleanup:mediaRepair.confirmTitle", { name: p.name }),
			body: [X("cleanup:mediaRepair.body"), ...p.metered ? [X("cleanup:mediaRepair.meteredWarning")] : []].join(X("cleanup:shared.sentenceGap")),
			confirmLabel: X("cleanup:mediaRepair.confirm"),
			onConfirm: async () => {
				await n.start.mutateAsync(p.id);
			}
		});
	}, h = () => void o.run("stop", (e) => R(te, { stop: !0 }, "POST", e), Ht), g = n.outcome, _ = Tt(f ? s : g ?? d), v = o.error || q(g, "error") || (n.query.error ? X("cleanup:mediaRepair.statusUnavailable") : "");
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsx)(l, {
			layout: "split",
			label: X("cleanup:tools.mediaRepair"),
			footer: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(ge, {
				"aria-label": X("cleanup:mediaRepair.library"),
				prefix: X("cleanup:mediaRepair.library"),
				className: "w-48",
				selectedKey: p?.id ?? null,
				isDisabled: f || !c.length,
				"aria-busy": r.isPending || void 0,
				onSelectionChange: (e) => {
					e !== null && a(String(e));
				},
				children: c.map((e) => /* @__PURE__ */ (0, $.jsx)(_e, {
					id: e.id,
					textValue: e.name,
					children: /* @__PURE__ */ (0, $.jsx)(b, { library: {
						id: e.id,
						name: e.name,
						icon: Vt(e.icon)
					} })
				}, e.id))
			}), f ? /* @__PURE__ */ (0, $.jsx)(t, {
				onClick: h,
				...H(o.busy === "stop"),
				children: X("cleanup:shared.stop")
			}) : /* @__PURE__ */ (0, $.jsx)(t, {
				onClick: m,
				disabled: !p,
				children: X("cleanup:mediaRepair.start")
			})] }),
			children: /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsx)(u, { children: X("cleanup:tools.mediaRepair") }),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: le
					}),
					f && s.total ? /* @__PURE__ */ (0, $.jsx)(se, {
						label: X("cleanup:mediaRepair.progress"),
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
				g?.status === "complete" && g.missing_tool ? /* @__PURE__ */ (0, $.jsx)(T, {
					tone: "warning",
					title: X("cleanup:mediaRepair.missingTool"),
					action: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "ghost",
						size: "small",
						onClick: n.dismiss,
						children: X("cleanup:mediaRepair.dismiss")
					}),
					children: tt(g)
				}) : null,
				r.isError ? /* @__PURE__ */ (0, $.jsx)(T, {
					tone: "error",
					children: X("cleanup:mediaRepair.librariesUnavailable")
				}) : null,
				v ? /* @__PURE__ */ (0, $.jsx)(T, {
					tone: "error",
					children: v
				}) : null
			]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function Wt({ className: e }) {
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
var Gt = Y("rotate-cw"), Kt = X("cleanup:links.goneHint"), qt = X("cleanup:links.unclearHint"), Jt = X("cleanup:links.pruneHint"), Yt = X("cleanup:shared.reconnecting"), Xt = (e) => Number(e || 0).toLocaleString();
function Zt({ label: e, value: t, note: n }) {
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
function Qt({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	if (!t.length) return null;
	let c = [
		{
			id: "entity",
			label: X("cleanup:links.columnEntry"),
			width: 180,
			min: 128,
			value: (e) => e.entity,
			render: (e) => /* @__PURE__ */ (0, $.jsxs)("a", {
				className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary hover:underline",
				href: e.entity_id && e.entity_kind ? Ae(e.entity_kind, e.entity, e.entity_id) : void 0,
				"data-link-identity": "",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					"data-link-avatar": "",
					className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${It}`,
					"aria-hidden": !0,
					dangerouslySetInnerHTML: { __html: `<span>${K(Ye(e.entity))}</span>` + W({
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
			label: X("cleanup:shared.type"),
			width: 128,
			value: (e) => v[e.link_kind] || e.link_kind,
			render: (e) => v[e.link_kind] || e.link_kind
		},
		{
			id: "label",
			label: X("cleanup:links.columnName"),
			min: 128,
			value: (e) => et(e.label),
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				className: "flex min-w-24 items-center gap-2",
				"data-link-name": "",
				children: /* @__PURE__ */ (0, $.jsx)("span", {
					className: "min-w-0 wrap-anywhere",
					children: et(e.label) || new URL(e.url).hostname
				})
			})
		},
		{
			id: "note",
			label: X("cleanup:links.columnResult"),
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
						children: X(s ? "cleanup:links.dead" : "cleanup:links.inconclusive")
					}), /* @__PURE__ */ (0, $.jsx)(Nt, {
						text: _t(e.note_code ?? "", e.note, e.note_params),
						className: "tabular-nums text-text-secondary"
					})]
				})
			})
		},
		{
			id: "url",
			label: X("cleanup:links.columnUrl"),
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
					/* @__PURE__ */ (0, $.jsx)(Ft, { linkId: e.id }),
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-middle-truncate": !0,
						className: "min-w-0 truncate",
						children: e.url
					}),
					/* @__PURE__ */ (0, $.jsx)(be, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})
				]
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: pe,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ (0, $.jsx)(Pt, {
			label: e,
			items: t,
			columns: c,
			rowId: (e) => String(e.id),
			description: n,
			unit: X("cleanup:links.unit"),
			panel: !1,
			footerActions: o,
			rowLabel: (e) => X("cleanup:links.rowLabel", {
				entity: e.entity,
				link: et(e.label) || e.url
			}),
			selected: r.map(String),
			onSelected: (e) => i(e.map(Number)),
			actions: () => a
		})
	});
}
function $t() {
	let e = Z({
		queryKey: g,
		queryFn: ({ signal: e }) => Le(e)
	}), [n, r] = (0, Q.useState)([]), [i, a] = (0, Q.useState)([]), s = Dt({
		queryKey: ee,
		queryFn: ({ signal: e }) => Ie(e),
		start: xt,
		onFinish: () => {
			J.invalidateQueries({
				queryKey: g,
				exact: !0
			}), J.invalidateQueries({
				queryKey: _,
				exact: !0
			});
		}
	}), c = Dt({
		queryKey: _,
		queryFn: ({ signal: e }) => Fe(e),
		start: bt,
		onStarted: () => {
			s.dismiss(), r([]), a([]);
		}
	}), d = c.job, f = d?.check_id ?? "";
	(0, Q.useEffect)(() => {
		r([]), a([]);
	}, [f]);
	let p = c.running || c.start.isPending, m = s.running || s.start.isPending, h = !!c.job && !!s.job, y = d?.status === "complete", b = d?.gone ?? [], x = d?.unclear ?? [], S = y ? x : [], te = b.filter((e) => i.includes(e.id)).map((e) => e.id), C = S.filter((e) => n.includes(e.id)).map((e) => e.id), w = e.data, ne = (w?.top_hosts ?? []).slice(0, 3), re = (e) => {
		!h || p || e && !e.length || c.start.mutate(e ? {
			retry: e,
			checkId: f
		} : {});
	}, ie = (e) => {
		h && !m && b.length && U({
			title: X("cleanup:links.deleteDead"),
			body: X("cleanup:links.deleteDeadBody", { count: e?.length ?? b.length }),
			confirmLabel: X("cleanup:links.deleteDead"),
			danger: !0,
			onConfirm: () => s.start.mutateAsync({
				checkId: f,
				ids: e
			})
		});
	}, E = s.outcome, ae = c.start.error ?? s.start.error, D = null, O = null;
	if (E?.status === "failed") O = /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "error",
		title: X("cleanup:links.pruneIncomplete"),
		children: q(E, "error") || X("cleanup:links.checkTaskLog")
	});
	else if (E && !b.length && !x.length) O = /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "success",
		title: X("cleanup:links.pruneDone"),
		children: ct(E)
	});
	else if (ae) O = /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "error",
		title: X("cleanup:links.checkFailed"),
		children: G(ae)
	});
	else if (c.query.isError && d) O = /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "neutral",
		title: X("cleanup:shared.taskStatus"),
		children: Yt
	});
	else if (d?.status === "failed") O = /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "error",
		title: X("cleanup:links.checkFailed"),
		children: q(d, "error") || X("cleanup:links.checkFailed")
	});
	else if (d && d.status !== "idle") {
		D = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [d.status === "running" ? /* @__PURE__ */ (0, $.jsx)(F, {
			embedded: !0,
			kind: L("link-check"),
			label: Te(d),
			value: Math.min(d.checked || 0, d.total || 0),
			total: d.total
		}) : null, m ? /* @__PURE__ */ (0, $.jsx)(F, {
			embedded: !0,
			kind: L("link-prune"),
			label: q(s.job) || X("cleanup:links.pruning"),
			value: Math.min(s.job?.checked || 0, s.job?.total || 0),
			total: s.job?.total
		}) : null] });
		let e = X("cleanup:links.retrySelected", { count: C.length });
		O = y || b.length || x.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
			className: fe,
			children: [
				E?.status === "complete" ? /* @__PURE__ */ (0, $.jsx)(T, {
					tone: "success",
					title: X("cleanup:links.pruneDone"),
					children: ct(E)
				}) : null,
				/* @__PURE__ */ (0, $.jsx)(Qt, {
					title: X("cleanup:links.dead"),
					items: b,
					hint: Kt,
					picked: i,
					onPick: a,
					confirmed: !0,
					footer: y && b.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: Jt
					}), /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "danger",
						...H(m),
						onClick: () => ie(),
						children: X("cleanup:links.deleteDeadCount", { count: b.length })
					})] }) : null,
					children: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "danger",
						size: "small",
						disabled: !y || !te.length,
						...H(m),
						onClick: () => ie(te),
						children: X("cleanup:links.deleteSelected", { count: te.length })
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(Qt, {
					title: X("cleanup:links.unreached"),
					items: x,
					hint: qt,
					picked: n,
					onPick: r,
					footer: S.length ? /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "primary",
						leadingIcon: Gt,
						...H(p),
						onClick: () => re(S.map((e) => e.id)),
						children: X("cleanup:links.retryAll", { count: S.length })
					}) : null,
					children: S.length ? /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "secondary",
						leadingIcon: Gt,
						disabled: !C.length,
						...H(p),
						onClick: () => re(C),
						children: e
					}) }) : null
				}),
				y && !b.length && !x.length ? /* @__PURE__ */ (0, $.jsx)("p", {
					className: `${pe} text-body-regular text-notification-success-foreground`,
					children: X("cleanup:links.allReachable")
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
				leadingIcon: Wt,
				disabled: !h,
				...H(p),
				onClick: () => re(),
				children: X(p ? "cleanup:links.checking" : y ? "cleanup:links.checkAgain" : "cleanup:links.checkLinks")
			}),
			children: [
				/* @__PURE__ */ (0, $.jsx)(u, {
					id: "link-manager-title",
					gap: "small",
					children: X("cleanup:tools.links")
				}),
				e.isError ? /* @__PURE__ */ (0, $.jsx)(T, {
					tone: "error",
					title: X("cleanup:links.statsLoadFailed"),
					children: G(e.error)
				}) : w ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ (0, $.jsx)(Zt, {
						label: X("cleanup:links.totalLinks"),
						value: Xt(w.total),
						note: X("cleanup:links.entitySpread", { count: Number(w.entities || 0) })
					}), Object.entries(w.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(Zt, {
						label: v[e] || e,
						value: Xt(t)
					}, e))]
				}), ne.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: X("cleanup:links.topSites")
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: ne.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ (0, $.jsxs)("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ (0, $.jsx)(Ft, { linkId: w.top_host_link_ids?.[e] }),
									/* @__PURE__ */ (0, $.jsx)("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ (0, $.jsx)(be, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ (0, $.jsx)(o, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ (0, $.jsx)("span", {
									className: "tabular-nums",
									children: Xt(t)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ (0, $.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: D
				})
			]
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: O
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var en = {
	output_root: "",
	skip_dirs: [],
	only_dirs: [],
	prefix_min_count: 0,
	collision: "skip"
}, tn = (e, t, n) => {
	let r = [
		n.output_root ? X("cleanup:organize.ruleOutputRoot", { root: n.output_root }) : "",
		n.skip_dirs.length ? X("cleanup:organize.ruleSkipDirs", { count: n.skip_dirs.length }) : "",
		n.only_dirs.length ? X("cleanup:organize.ruleOnlyDirs", { count: n.only_dirs.length }) : "",
		n.prefix_min_count > 0 ? X("cleanup:organize.rulePrefix", { count: n.prefix_min_count }) : "",
		n.collision === "suffix" ? X("cleanup:organize.ruleCollisionSuffix") : X("cleanup:organize.ruleCollisionSkip")
	].filter(Boolean);
	return (t ? X("cleanup:organize.applyBodyPath", {
		name: e,
		path: t
	}) : X("cleanup:organize.applyBodyAll", { name: e })) + (r.length ? X("cleanup:organize.applyRules", { rules: r.join(X("cleanup:organize.ruleGap")) }) : "");
}, nn = X("cleanup:organize.rollbackBody"), rn = 8;
function an(e) {
	return e.split(/[,，;\n\r]+/).map((e) => e.trim()).filter(Boolean);
}
function on(e) {
	return (e || []).join(", ");
}
function sn(e, t) {
	return e === "skip" ? X("cleanup:organize.collisionSkip") : e === "suffix" ? X("cleanup:organize.collisionSuffix") : t;
}
function cn({ plan: e }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, rn).map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ (0, $.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: Ce(e.current_path)
				}),
				/* @__PURE__ */ (0, $.jsx)("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ (0, $.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: Ce(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > rn ? /* @__PURE__ */ (0, $.jsx)("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: X("cleanup:organize.planTruncated")
	}) : null] });
}
function ln({ toast: e, failure: n }) {
	let r = Z({
		queryKey: ne,
		queryFn: ({ signal: e }) => Be(e)
	}), i = r.data, a = i?.locations ?? [], [o, c] = (0, Q.useState)(""), d = a.some((e) => e.location === o) ? o : a[0]?.location ?? "", p = i?.templates?.[d], [h, g] = (0, Q.useState)(null), _ = h?.location === d ? h : {
		location: d,
		file: p?.file ?? "",
		dir: p?.dir ?? ""
	}, v = (e) => {
		g({
			..._,
			...e
		}), I.reset();
	}, ee = i?.organize_rules?.defaults ?? en, [b, x] = (0, Q.useState)(null), S = b ?? ee, [te, C] = (0, Q.useState)(null), [ae, D] = (0, Q.useState)(null), O = te ?? on(S.skip_dirs), oe = ae ?? on(S.only_dirs), k = (e) => {
		x({
			...S,
			...e
		}), "skip_dirs" in e && C(null), "only_dirs" in e && D(null), j(null), I.reset();
	}, se = (e) => {
		let t = e.javorg_mode ? i?.organize_rules?.preset_rules?.[e.javorg_mode] : void 0, n = {
			output_root: e.output_root ?? t?.output_root ?? "",
			skip_dirs: e.skip_dirs ?? t?.skip_dirs ?? [],
			only_dirs: e.only_dirs ?? t?.only_dirs ?? [],
			prefix_min_count: e.prefix_min_count ?? t?.prefix_min_count ?? 0,
			collision: e.collision ?? t?.collision ?? "skip"
		};
		x(n), C(null), D(null);
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
	let [de, j] = (0, Q.useState)(null), fe = (0, Q.useRef)(null), pe = (0, Q.useRef)(null), me = (0, Q.useRef)(null), he = Z({
		queryKey: [
			"organize-example",
			_.file,
			_.dir
		],
		queryFn: ({ signal: e }) => Ve(_.file, _.dir, e),
		enabled: !!i
	}), [M, ve] = (0, Q.useState)("file"), N = (0, Q.useRef)(!1), P = (0, Q.useRef)(null);
	(0, Q.useLayoutEffect)(() => {
		let e = P.current;
		if (!e) return;
		P.current = null;
		let t = (e.field === "file" ? fe : pe).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let be = () => ({
		location: d,
		path: A.trim(),
		file_template: _.file.trim(),
		dir_template: _.dir.trim(),
		output_root: S.output_root,
		skip_dirs: an(O),
		only_dirs: an(oe),
		prefix_min_count: Number(S.prefix_min_count) || 0,
		collision: S.collision || "skip"
	}), I = kt({
		mutationFn: st,
		onError: (e) => {
			let t = /整理路径/.test(G(e)) ? "path" : s.test(G(e)) ? "dir" : "file";
			j(t), (t === "path" ? me : t === "dir" ? pe : fe).current?.focus();
		}
	}), R = kt({
		mutationFn: ({ initial: e }) => it(e),
		onSuccess: (e, t) => {
			e.path && t.location === ue.current.location && t.path === ue.current.path && (le({
				location: t.location,
				path: e.path
			}), j(null), I.reset(), me.current?.focus());
		}
	}), z = Dt({
		queryKey: ne,
		queryFn: ({ signal: e }) => Be(e),
		start: St,
		jobOf: (e) => e,
		withJob: jt,
		onStarted: () => I.reset(),
		onFinish: (t) => {
			if (J.invalidateQueries({
				queryKey: ne,
				exact: !0
			}), t.status !== "complete") return;
			let { text: r, failed: i } = nt(t);
			i ? n(X("cleanup:tools.organize"), Error(X("cleanup:organize.rowsFailed", { count: i }))) : e(r.replace(/。$/, ""));
		}
	}), B = z.running || z.start.isPending, xe = JSON.stringify(I.variables) === JSON.stringify(be()), V = xe ? I.data : void 0, Se = Number(V?.counts?.change || 0), Ce = y[d] || d, we = (e) => {
		v(e), j(null), I.reset();
	}, Te = (e) => {
		let t = (M === "file" ? fe : pe).current, n = _[M], r = N.current ? t?.selectionStart ?? n.length : n.length, i = N.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		P.current = {
			field: M,
			caret: r + a.length
		}, we({ [M]: n.slice(0, r) + a + n.slice(i) });
	}, De = () => {
		if (I.isPending || B || !d) return;
		z.dismiss(), z.start.reset(), j(null);
		let e = an(O), t = an(oe);
		x({
			...S,
			skip_dirs: e,
			only_dirs: t
		}), C(null), D(null), I.mutate({
			...be(),
			skip_dirs: e,
			only_dirs: t
		});
	}, Oe = () => {
		let e = I.variables;
		e && V && Se && U({
			title: X("cleanup:tools.organize"),
			body: tn(Ce, e.path, {
				output_root: e.output_root || "",
				skip_dirs: e.skip_dirs || [],
				only_dirs: e.only_dirs || [],
				prefix_min_count: e.prefix_min_count || 0,
				collision: e.collision || "skip"
			}),
			confirmLabel: X("cleanup:tools.organize"),
			onConfirm: async () => {
				await z.start.mutateAsync({
					kind: "apply",
					request: e
				}), ft({
					...i?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, ke = () => void U({
		title: X("cleanup:organize.rollbackTitle"),
		body: nn,
		confirmLabel: X("cleanup:organize.rollbackConfirm"),
		onConfirm: () => z.start.mutateAsync({ kind: "rollback" })
	}), W = null, Ae = !!Se && !B && !z.outcome, K = z.job, je = z.outcome;
	if (K?.status === "running") {
		let e = q(K) || yt(K) || X("cleanup:organize.running");
		W = /* @__PURE__ */ (0, $.jsx)(F, {
			embedded: !0,
			kind: L("organize", K.stage_code),
			label: e,
			value: Math.min(K.checked || 0, K.total || 0),
			total: K.total
		});
	} else if (je?.status === "failed") W = /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "error",
		title: X("cleanup:organize.incomplete"),
		children: q(je, "error") || X("cleanup:shared.checkTaskLogFiles")
	});
	else if (je) {
		let { text: e, failed: t } = nt(je);
		W = /* @__PURE__ */ (0, $.jsx)(T, {
			tone: t ? "warning" : "success",
			title: X(t ? "cleanup:shared.partiallyCompleted" : "cleanup:organize.result"),
			children: e
		});
	} else z.start.isError ? W = /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "error",
		title: X("cleanup:organize.failed"),
		children: G(z.start.error)
	}) : I.isPending ? W = /* @__PURE__ */ (0, $.jsx)(F, {
		embedded: !0,
		kind: L("organize", "organize.checkingPlan"),
		label: X("cleanup:organize.checkingPlan")
	}) : I.isError && xe ? W = /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "error",
		title: X("cleanup:organize.previewFailed"),
		children: G(I.error)
	}) : V && (W = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(T, {
		tone: "neutral",
		title: X("cleanup:organize.previewResult"),
		children: ot(V)
	}), Se ? /* @__PURE__ */ (0, $.jsx)(cn, { plan: V }) : null] }));
	let Me = i?.organize_rules?.collisions ?? [{
		id: "skip",
		label: X("cleanup:organize.collisionSkip")
	}, {
		id: "suffix",
		label: X("cleanup:organize.collisionSuffix")
	}];
	return /* @__PURE__ */ (0, $.jsxs)(l, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			i?.last_batch ? /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "secondary",
				...H(B),
				onClick: ke,
				children: X("cleanup:organize.rollbackLastBatch")
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(t, {
				variant: Ae ? "secondary" : "primary",
				disabled: !a.length || B,
				...H(I.isPending),
				onClick: De,
				children: X("cleanup:organize.preview")
			}),
			Ae ? /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "primary",
				onClick: Oe,
				children: X("cleanup:organize.apply")
			}) : null
		] }),
		children: [
			/* @__PURE__ */ (0, $.jsx)(u, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: X("cleanup:organize.title")
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: E
			}),
			r.isError ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, $.jsx)(T, {
					tone: "error",
					title: X("cleanup:organize.settingsLoadFailed"),
					children: G(r.error)
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [a.length ? /* @__PURE__ */ (0, $.jsx)(ge, {
							"aria-label": X("cleanup:organize.storageLabel"),
							prefix: X("cleanup:organize.storagePrefix"),
							className: "w-fit min-w-25",
							selectedKey: d || null,
							onSelectionChange: (e) => {
								e !== null && (c(String(e)), le({
									location: String(e),
									path: ""
								}), j(null), I.reset(), R.reset(), N.current = !1);
							},
							children: a.map((e) => /* @__PURE__ */ (0, $.jsxs)(_e, {
								id: e.location,
								textValue: y[e.location] || e.location,
								children: [/* @__PURE__ */ (0, $.jsx)(ye, { mark: w[e.location] || "database" }), y[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ (0, $.jsx)(m, {
								"aria-label": X("cleanup:organize.pathLabel"),
								className: "min-w-0 flex-1",
								placeholder: X("cleanup:organize.pathPlaceholder"),
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
									}), j(null), I.reset(), R.reset();
								}
							}), /* @__PURE__ */ (0, $.jsx)(f, {
								icon: Lt,
								"aria-label": X("cleanup:organize.choosePath"),
								...H(R.isPending),
								onClick: () => R.mutate({
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
						children: X("cleanup:organize.codeRulesHint")
					}),
					R.isError ? /* @__PURE__ */ (0, $.jsxs)(T, {
						tone: "error",
						title: X("cleanup:organize.pickerFailed"),
						children: [G(R.error), X("cleanup:organize.pickerFallback")]
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: X("cleanup:organize.fileTemplate"),
						placeholder: "{code}[ {title}]",
						value: _.file,
						ref: fe,
						spellCheck: "false",
						isInvalid: de === "file",
						onFocus: () => {
							ve("file"), N.current = !0;
						},
						onChange: (e) => we({ file: e })
					}),
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: X("cleanup:organize.dirTemplate"),
						placeholder: X("cleanup:organize.dirTemplatePlaceholder"),
						value: _.dir,
						ref: pe,
						spellCheck: "false",
						isInvalid: de === "dir",
						onFocus: () => {
							ve("dir"), N.current = !0;
						},
						onChange: (e) => we({ dir: e })
					}),
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: X("cleanup:organize.outputRoot"),
						placeholder: X("cleanup:organize.outputRootPlaceholder"),
						value: S.output_root,
						spellCheck: "false",
						onChange: (e) => k({ output_root: e })
					}),
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: X("cleanup:organize.skipDirs"),
						placeholder: X("cleanup:organize.skipDirsPlaceholder"),
						value: O,
						spellCheck: "false",
						onChange: (e) => {
							C(e), I.reset();
						},
						onBlur: () => k({ skip_dirs: an(O) })
					}),
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: X("cleanup:organize.onlyDirs"),
						placeholder: X("cleanup:organize.onlyDirsPlaceholder"),
						value: oe,
						spellCheck: "false",
						onChange: (e) => {
							D(e), I.reset();
						},
						onBlur: () => k({ only_dirs: an(oe) })
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)(m, {
							label: X("cleanup:organize.prefixThreshold"),
							className: "w-40",
							placeholder: X("cleanup:organize.prefixThresholdPlaceholder"),
							value: String(S.prefix_min_count ?? 0),
							spellCheck: "false",
							onChange: (e) => {
								let t = e.replace(/[^\d]/g, "");
								k({ prefix_min_count: t === "" ? 0 : Number(t) });
							}
						}), /* @__PURE__ */ (0, $.jsx)(ge, {
							"aria-label": X("cleanup:organize.collisionAria"),
							prefix: X("cleanup:organize.collisionPrefix"),
							className: "w-fit min-w-40",
							selectedKey: S.collision || "skip",
							onSelectionChange: (e) => {
								e !== null && k({ collision: String(e) });
							},
							children: Me.map((e) => /* @__PURE__ */ (0, $.jsx)(_e, {
								id: e.id,
								textValue: sn(e.id, e.label),
								children: sn(e.id, e.label)
							}, e.id))
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: X("cleanup:organize.rulesHint")
					}),
					i?.presets?.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": X("cleanup:organize.applyPreset"),
						children: [/* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-caption-1-medium text-text-secondary",
							children: X("cleanup:organize.applyPreset")
						}), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: i.presets.map((e) => {
								let n = Ee(e, "label");
								return /* @__PURE__ */ (0, $.jsx)(t, {
									variant: "secondary",
									size: "small",
									title: e.example || n,
									className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
									onClick: () => {
										we({
											file: e.file,
											dir: e.dir
										}), e.javorg_mode || e.output_root !== void 0 || e.collision ? se(e) : (x({ ...en }), C(null), D(null)), N.current = !1, I.reset();
									},
									children: /* @__PURE__ */ (0, $.jsx)("span", {
										className: "truncate",
										children: n
									})
								}, e.id || e.label);
							})
						})]
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("p", {
						"aria-live": "polite",
						"aria-busy": he.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: [
							X("cleanup:organize.examplePath"),
							/* @__PURE__ */ (0, $.jsx)("code", {
								className: "wrap-anywhere",
								children: he.data?.example || he.data?.error || (he.isError ? G(he.error) : X("cleanup:organize.previewLoading"))
							}),
							S.output_root ? X("cleanup:organize.exampleOutputRoot", { root: S.output_root }) : null
						]
					}),
					i?.placeholders?.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": X("cleanup:organize.insertParameter"),
						children: [/* @__PURE__ */ (0, $.jsxs)("p", {
							className: "text-caption-1-regular text-text-secondary",
							"aria-live": "polite",
							children: [/* @__PURE__ */ (0, $.jsx)("strong", {
								className: "text-caption-1-semibold text-text-primary",
								children: X("cleanup:organize.insertParameter")
							}), X("cleanup:organize.insertTarget", { target: X(M === "file" ? "cleanup:organize.fileTemplate" : "cleanup:organize.dirTemplate") })]
						}), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: i.placeholders.map((e) => {
								let n = _t(`labels.organizeTemplates.placeholder.${e.key}`, e.label);
								return /* @__PURE__ */ (0, $.jsx)(t, {
									variant: "ghost",
									size: "small",
									"aria-label": `${n} {${e.key}}`,
									onClick: () => Te(e.key),
									children: /* @__PURE__ */ (0, $.jsxs)("span", {
										className: "inline-flex flex-wrap items-center gap-x-1.5",
										children: [/* @__PURE__ */ (0, $.jsx)("code", { children: `{${e.key}}` }), /* @__PURE__ */ (0, $.jsx)("span", {
											className: "text-text-secondary",
											children: n
										})]
									})
								}, e.key);
							})
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
var un = Y("play"), dn = () => J.invalidateQueries({
	queryKey: ae,
	exact: !0
});
function fn({ item: e, toast: n }) {
	let [r, i] = (0, Q.useState)(e.candidates[0]?.id ?? null), a = kt({
		mutationFn: () => Se(e.id, Number(r)),
		onSuccess: () => {
			let t = e.candidates.find((e) => e.id === r);
			n(X("cleanup:orphans.attached", {
				name: e.name,
				target: t?.name ?? X("cleanup:orphans.selectedFile")
			})), dn();
		},
		onError: (e) => n(G(e))
	}), o = kt({
		mutationFn: () => ut(e.id),
		onSuccess: (t) => {
			n(t.blocked.length ? X("cleanup:orphans.fileRestored", { name: e.name }) : X("cleanup:orphans.recordDeleted", { name: e.name })), dn();
		}
	}), s = () => {
		U({
			title: X("cleanup:orphans.deleteRecord"),
			body: dt(e.records) ? X("cleanup:orphans.deleteBodyWithActivity", {
				name: e.name,
				records: dt(e.records)
			}) : X("cleanup:orphans.deleteBody", { name: e.name }),
			confirmLabel: X("cleanup:orphans.deleteRecord"),
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
				...H(c),
				onClick: s,
				children: X("cleanup:orphans.deleteRecord")
			}),
			e.candidates.length ? /* @__PURE__ */ (0, $.jsx)(ge, {
				"aria-label": X("cleanup:orphans.targetLabel", { name: e.name }),
				prefix: X("cleanup:orphans.targetPrefix"),
				className: "w-52",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: e.candidates.map((e) => /* @__PURE__ */ (0, $.jsx)(_e, {
					id: e.id,
					textValue: we(e),
					children: we(e)
				}, e.id))
			}) : null,
			e.candidates.length ? /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "primary",
				size: "small",
				disabled: r === null,
				...H(c),
				onClick: () => a.mutate(),
				children: X("cleanup:orphans.moveActivity")
			}) : null
		]
	});
}
function pn({ item: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, $.jsxs)("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ (0, $.jsx)(un, {
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
			}), /* @__PURE__ */ (0, $.jsxs)("small", {
				className: "flex min-w-0 items-center gap-1.5 text-caption-1-regular text-text-secondary",
				children: [
					e.code ? /* @__PURE__ */ (0, $.jsx)("span", {
						className: "shrink-0",
						children: e.code
					}) : null,
					e.code && e.location ? /* @__PURE__ */ (0, $.jsx)("span", {
						"aria-hidden": "true",
						children: "·"
					}) : null,
					e.location ? /* @__PURE__ */ (0, $.jsx)(ve, {
						source: e.location,
						label: y[e.location] || e.location
					}) : null
				]
			})]
		})]
	});
}
function mn({ toast: e }) {
	let [n, r] = (0, Q.useState)([]), i = Z({
		queryKey: ae,
		queryFn: ({ signal: e }) => He(e)
	}), a = i.data?.items ?? [], o = kt({
		mutationFn: (e) => ut(e),
		onSuccess: (t) => {
			e(X("cleanup:orphans.purged", { count: t.purged }) + (t.blocked.length ? X("cleanup:orphans.purgedBlocked", { count: t.blocked.length }) : "")), r([]), dn();
		}
	}), s = (e) => void U({
		title: X("cleanup:orphans.deleteSelectedTitle"),
		body: X("cleanup:orphans.deleteSelectedBody", { count: e.length }),
		items: e.map((e) => e.name),
		confirmLabel: X("cleanup:orphans.deleteSelectedTitle"),
		danger: !0,
		onConfirm: () => o.mutateAsync(e.map((e) => e.id))
	}), c = [
		{
			id: "item",
			label: X("cleanup:shared.video"),
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ (0, $.jsx)(pn, { item: e })
		},
		{
			id: "records",
			label: X("cleanup:orphans.columnActivity"),
			width: 176,
			min: 144,
			value: (e) => dt(e.records),
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: dt(e.records) || X("cleanup:shared.none")
			})
		},
		{
			id: "target",
			label: X("cleanup:shared.actions"),
			width: a.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (t) => /* @__PURE__ */ (0, $.jsx)(fn, {
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
				children: X("cleanup:tools.orphanRecords")
			}), /* @__PURE__ */ (0, $.jsx)(T, {
				tone: "error",
				title: X("cleanup:orphans.loadFailed"),
				children: G(i.error)
			})]
		}) : /* @__PURE__ */ (0, $.jsx)(Pt, {
			label: X("cleanup:orphans.tableLabel"),
			items: a,
			columns: c,
			title: X("cleanup:tools.orphanRecords"),
			titleId: "orphan-records-title",
			unit: X("cleanup:orphans.unit"),
			description: D,
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: n,
			onSelected: r,
			actions: (e) => /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "danger",
				size: "small",
				disabled: !e.length,
				...H(o.isPending),
				onClick: () => s(e),
				children: X("cleanup:orphans.deleteSelectedCount", { count: e.length })
			})
		})
	});
}
// src/react/data-cleanup/performer-delete-card.tsx
function hn({ person: e }) {
	let t = ke("performer", e.k, e.entity_id);
	return /* @__PURE__ */ (0, $.jsxs)("a", {
		href: Ae("performer", e.k, e.entity_id),
		title: t,
		className: "flex min-w-0 items-center gap-3 text-text-primary",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			"aria-hidden": !0,
			className: De("relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium", It),
			dangerouslySetInnerHTML: { __html: `<span>${K(Ye(t))}</span>` + W({
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
function gn(e, t, n) {
	let r = (e) => e.slice(0, 5).join(X("cleanup:shared.listSeparator")), i = e.length > 5 ? X("cleanup:performerDelete.moreNames", {
		names: r(e),
		total: e.length
	}) : r(e), a = t.length > 5 ? X("cleanup:performerDelete.moreExamples", {
		examples: r(t),
		total: t.length
	}) : r(t);
	return [
		X("cleanup:performerDelete.bodyScope", {
			names: i,
			count: n.total,
			size: Xe(n.bytes)
		}),
		X("cleanup:performerDelete.bodyWarning"),
		...n.shared ? [X("cleanup:performerDelete.sharedFiles", { count: n.shared })] : [],
		X("cleanup:performerDelete.bodyExamples", { examples: a })
	].join(X("cleanup:shared.sentenceGap"));
}
function _n({ toast: n }) {
	Ot();
	let r = Z({
		queryKey: O,
		queryFn: ({ signal: e }) => je(e)
	}), [i, a] = (0, Q.useState)([]), [o, s] = (0, Q.useState)(""), [c, d] = (0, Q.useState)(!1), [f, m] = (0, Q.useState)(null), [h, g] = (0, Q.useState)(""), _ = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => () => _.current?.abort(), []);
	let v = (0, Q.useMemo)(() => [
		{
			id: "name",
			label: X("cleanup:shared.actress"),
			width: 280,
			min: 160,
			value: (e) => e.k,
			render: (e) => /* @__PURE__ */ (0, $.jsx)(hn, { person: e })
		},
		{
			id: "works",
			label: X("cleanup:shared.videos"),
			width: 104,
			min: 80,
			value: (e) => e.n,
			render: (e) => X("cleanup:performerDelete.videoCount", { count: e.n })
		},
		{
			id: "files",
			label: X("cleanup:shared.files"),
			width: 104,
			min: 80,
			value: (e) => e.file_count,
			render: (e) => X("cleanup:performerDelete.fileCount", { count: e.file_count })
		},
		{
			id: "bytes",
			label: X("cleanup:performerDelete.columnSize"),
			width: 136,
			min: 104,
			value: (e) => e.bytes,
			render: (e) => Xe(e.bytes)
		}
	], []), ee = o.toLocaleLowerCase(), y = (r.data?.items || []).filter((e) => !ee || [
		e.k,
		ke("performer", e.k, e.entity_id),
		...e.aliases
	].some((e) => e.toLocaleLowerCase().includes(ee))), b = async (e, t) => {
		if (c) return;
		d(!0), g("");
		let r = new AbortController();
		_.current = r;
		try {
			let i = await Me(e.map((e) => e.entity_id), r.signal);
			if (r.signal.throwIfAborted(), !i.total) {
				n(X("cleanup:performerDelete.nothingToDelete"));
				return;
			}
			let a = i.performers.map((e) => ke("performer", e.name, e.id)), o = [...new Set(i.items.map((e) => e.code || e.name || `#${e.id}`))], s = await U({
				title: X("cleanup:performerDelete.confirmTitle"),
				body: gn(a, o, i),
				confirmLabel: X("cleanup:performerDelete.confirm"),
				danger: !0,
				onConfirm: () => Oe(i)
			});
			if (!s.confirmed) return;
			let c = s.result;
			m(c), t(), await Promise.all([J.invalidateQueries({
				queryKey: O,
				exact: !0
			}), J.invalidateQueries({
				queryKey: P,
				exact: !0
			})]), n(X("cleanup:performerDelete.purged", { count: c.purged }) + (c.blocked.length ? X("cleanup:performerDelete.doneBlocked", { count: c.blocked.length }) : ""));
		} catch (e) {
			r.signal.aborted || g(G(e));
		} finally {
			r.signal.aborted || d(!1);
		}
	}, x = f ? [
		...f.blocked.map((e) => ({
			path: e.path,
			reason: _t(e.reason_code ?? "", e.reason, e.reason_params)
		})),
		...f.cleanup_pending,
		...f.cache_blocked.map((e) => ({
			path: e.name,
			reason: e.reason
		}))
	] : [];
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "batch-delete",
		className: "flex min-w-0 scroll-mt-20 flex-col gap-3",
		"aria-label": X("cleanup:tools.bulkDelete"),
		children: [
			r.isPending || r.isError ? /* @__PURE__ */ (0, $.jsxs)(l, {
				layout: "stack",
				labelledBy: "batch-delete-title",
				children: [/* @__PURE__ */ (0, $.jsx)(u, {
					id: "batch-delete-title",
					children: X("cleanup:tools.bulkDelete")
				}), r.isError ? /* @__PURE__ */ (0, $.jsx)(T, {
					tone: "error",
					title: X("cleanup:performerDelete.loadFailed"),
					action: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "secondary",
						size: "small",
						onClick: () => void r.refetch(),
						children: X("cleanup:shared.retry")
					}),
					children: G(r.error)
				}) : /* @__PURE__ */ (0, $.jsx)("p", {
					role: "status",
					className: "text-body-regular text-text-secondary",
					children: X("cleanup:performerDelete.loading")
				})]
			}) : /* @__PURE__ */ (0, $.jsx)(Pt, {
				label: X("cleanup:performerDelete.tableLabel"),
				title: X("cleanup:tools.bulkDelete"),
				titleId: "batch-delete-title",
				unit: X("cleanup:performerDelete.unit"),
				description: e,
				items: y,
				columns: v,
				rowId: (e) => String(e.entity_id),
				rowLabel: (e) => ke("performer", e.k, e.entity_id),
				selected: i,
				onSelected: a,
				toolbarActions: /* @__PURE__ */ (0, $.jsx)(p, {
					label: X("cleanup:performerDelete.search"),
					value: o,
					onQuery: (e) => {
						s(e), a([]);
					}
				}),
				actions: (e, n) => /* @__PURE__ */ (0, $.jsx)(t, {
					variant: "danger",
					size: "small",
					...H(c),
					onClick: () => void b(e, n),
					children: X("cleanup:performerDelete.deleteSelected")
				})
			}),
			h ? /* @__PURE__ */ (0, $.jsx)(T, {
				tone: "error",
				title: X("cleanup:performerDelete.planFailed"),
				children: h
			}) : null,
			f ? /* @__PURE__ */ (0, $.jsx)(T, {
				tone: x.length ? "warning" : "info",
				title: X("cleanup:performerDelete.purged", { count: f.purged }),
				extra: x.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex flex-col gap-2 text-body-2-regular wrap-anywhere",
					children: x.slice(0, 5).map((e, t) => /* @__PURE__ */ (0, $.jsx)("p", { children: X("shell:format.withNote", {
						text: e.path,
						note: e.reason
					}) }, t))
				}) : null,
				children: x.length ? X("cleanup:performerDelete.partialFailure", {
					count: f.blocked.length,
					quarantined: f.cleanup_pending.length,
					cacheFiles: f.cache_blocked.length
				}) : X("cleanup:performerDelete.done")
			}) : null
		]
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var vn = Y("git-compare"), yn = Y("rotate-cw"), bn = X("cleanup:shared.reconnecting"), xn = X("cleanup:resourceSync.cleanUpDead"), Sn = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", Cn = (e) => Number(e || 0).toLocaleString();
function wn({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
		className: Sn,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ (0, $.jsxs)("article", {
			className: at(),
			children: [/* @__PURE__ */ (0, $.jsx)(k, {
				label: he[e.location] || X("cleanup:resourceSync.storageFallback"),
				mark: /* @__PURE__ */ (0, $.jsx)(ye, { mark: w[e.location] ?? "database" }),
				aside: /* @__PURE__ */ (0, $.jsx)(Rt, {
					online: e.online,
					children: e.online ? X("cleanup:resourceSync.online") : X("cleanup:resourceSync.offline")
				}),
				figure: e.online ? X("cleanup:resourceSync.missingCount", { count: Number(e.missing || 0) }) : "—",
				meta: e.online ? vt(e) : X("cleanup:resourceSync.skipped", { summary: vt(e) }),
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsxs)(N, {
					tone: "warning",
					children: [
						Cn(e.unreadable),
						" ",
						X("cleanup:resourceSync.unreadableDirs")
					]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ (0, $.jsxs)("div", {
		className: Sn,
		children: [
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: at(),
				children: /* @__PURE__ */ (0, $.jsx)(k, {
					label: X("cleanup:resourceSync.toPurge"),
					figure: X("cleanup:resourceSync.purgeCount", { count: Number(lt(e) || 0) }),
					meta: X("cleanup:resourceSync.purgeHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: at(),
				children: /* @__PURE__ */ (0, $.jsx)(k, {
					label: X("cleanup:resourceSync.toVanish"),
					figure: X("cleanup:resourceSync.vanishCount", { count: Number(e.vanish || 0) }),
					meta: X("cleanup:resourceSync.vanishHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: at(),
				children: /* @__PURE__ */ (0, $.jsx)(k, {
					label: X("cleanup:resourceSync.emptyDirs"),
					figure: X("cleanup:resourceSync.emptyDirCount", { count: Number(e.empty || 0) }),
					meta: X("cleanup:resourceSync.emptyDirsHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: at(),
				children: /* @__PURE__ */ (0, $.jsx)(k, {
					label: X("cleanup:resourceSync.cache"),
					figure: X("cleanup:resourceSync.cacheCount", { count: Number(n.files || 0) }),
					meta: n.files ? Xe(n.bytes) : ""
				})
			})
		]
	})] });
}
function Tn({ toast: e }) {
	let n = Dt({
		queryKey: ue,
		queryFn: ({ signal: e }) => Ge(e),
		start: Ct,
		onFinish: (t) => {
			if (J.invalidateQueries({
				queryKey: P,
				exact: !0
			}), J.invalidateQueries({
				queryKey: de,
				exact: !0
			}), t.status !== "complete") return;
			let { done: n, left: r } = B(t);
			r ? e(X("cleanup:resourceSync.applyLeftovers", {
				done: Cn(n),
				count: Number(r || 0)
			}), { warning: !0 }) : e(X("cleanup:resourceSync.cleaned"));
		}
	}), r = Dt({
		queryKey: de,
		queryFn: ({ signal: e }) => Ke(e),
		start: wt,
		onStarted: () => n.dismiss()
	}), i = r.job, a = r.running || r.start.isPending, o = n.running || n.start.isPending, s = !!r.job && !!n.job, c = i?.status === "complete" || i?.status === "failed", d = X(a ? "cleanup:resourceSync.scanning" : c ? "cleanup:resourceSync.scanAgain" : "cleanup:resourceSync.checkFiles"), f = (e) => void U({
		title: xn,
		body: z(e),
		confirmLabel: xn,
		danger: !0,
		onConfirm: () => n.start.mutateAsync(e.scan_id || "")
	}), p = n.outcome, m = (e) => {
		let t = B(e).left > 0;
		return /* @__PURE__ */ (0, $.jsx)(T, {
			tone: t ? "warning" : "success",
			title: X(t ? "cleanup:shared.partiallyCompleted" : "cleanup:resourceSync.cleanupResult"),
			children: V(e, Xe)
		});
	}, h = null, g = null;
	if (p?.status === "failed") g = /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "error",
		title: X("cleanup:resourceSync.cleanupIncomplete"),
		children: q(p, "error") || X("cleanup:shared.checkTaskLogFiles")
	});
	else if (p) g = m(p);
	else if (n.running) h = /* @__PURE__ */ (0, $.jsx)(F, {
		embedded: !0,
		kind: L("resource-apply"),
		label: q(n.job) || X("cleanup:resourceSync.applying")
	});
	else if (r.start.isError) g = /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "error",
		title: X("cleanup:resourceSync.scanFailed"),
		children: G(r.start.error)
	});
	else if (r.query.isError && i) g = /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "neutral",
		title: X("cleanup:shared.taskStatus"),
		children: bn
	});
	else if (i?.status === "running") {
		let e = gt(i);
		h = /* @__PURE__ */ (0, $.jsx)(F, {
			embedded: !0,
			kind: L("resource-scan"),
			label: e,
			value: i.completed_sources,
			total: i.total_sources
		}), i.sources?.length && (g = /* @__PURE__ */ (0, $.jsx)(wn, {
			scan: i,
			partial: !0
		}));
	} else if (i?.status === "failed") g = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [i.sources?.length ? /* @__PURE__ */ (0, $.jsx)(wn, {
		scan: i,
		partial: !0
	}) : null, /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "error",
		title: X("cleanup:resourceSync.scanFailed"),
		children: q(i, "error") || X("cleanup:resourceSync.backgroundScanFailed")
	})] });
	else if (i?.status === "complete" && i.applied) g = n.job?.status === "complete" ? m(n.job) : /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "neutral",
		title: X("cleanup:resourceSync.cleanupResult"),
		children: X("cleanup:resourceSync.alreadyCleaned")
	});
	else if (i?.status === "complete") {
		let e = Ze(i);
		g = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(wn, { scan: i }), e ? /* @__PURE__ */ (0, $.jsx)(T, {
			tone: "neutral",
			title: X("cleanup:resourceSync.toClean"),
			action: /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "danger",
				disabled: !s,
				...H(o),
				onClick: () => {
					s && f(i);
				},
				children: o ? X("cleanup:resourceSync.applyingButton") : xn
			}),
			children: xe(i)
		}) : /* @__PURE__ */ (0, $.jsx)("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: X("cleanup:resourceSync.nothingToClean")
		})] });
	}
	return n.start.isError && !p && (g = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [g, /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "error",
		title: X("cleanup:resourceSync.cleanupFailed"),
		children: G(n.start.error)
	})] })), /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsxs)(l, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ (0, $.jsx)(t, {
				"data-resource-scan": !0,
				leadingIcon: c && !a ? yn : vn,
				disabled: !s,
				...H(a),
				onClick: () => {
					s && !a && r.start.mutate();
				},
				children: d
			}),
			children: [
				/* @__PURE__ */ (0, $.jsx)(u, {
					id: "resource-sync-title",
					gap: "small",
					children: X("cleanup:tools.resourceSync")
				}),
				r.query.isPending || n.query.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
					role: "status",
					"aria-label": X("cleanup:resourceSync.statusLoading"),
					"data-skeleton": "",
					className: "skeleton-sheen h-6 rounded-md"
				}) : null,
				!r.job && r.query.isError ? /* @__PURE__ */ (0, $.jsx)(T, {
					tone: "error",
					children: X("cleanup:resourceSync.scanStatusUnavailable")
				}) : null,
				!n.job && n.query.isError ? /* @__PURE__ */ (0, $.jsx)(T, {
					tone: "error",
					children: X("cleanup:resourceSync.applyStatusUnavailable")
				}) : null,
				/* @__PURE__ */ (0, $.jsx)("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: j
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
function En({ toast: e }) {
	let t = Z({
		queryKey: C,
		queryFn: ({ signal: e }) => ze(e)
	});
	return t.isError ? /* @__PURE__ */ (0, $.jsx)(T, {
		tone: "error",
		title: X("cleanup:resourceSync.storageLoadFailed"),
		children: G(t.error)
	}) : t.isPending ? /* @__PURE__ */ (0, $.jsx)("p", {
		role: "status",
		children: X("cleanup:resourceSync.storageLoading")
	}) : Qe(t.data) ? /* @__PURE__ */ (0, $.jsx)(Tn, { toast: e }) : /* @__PURE__ */ (0, $.jsxs)(l, {
		layout: "stack",
		label: X("cleanup:tools.resourceSync"),
		children: [
			/* @__PURE__ */ (0, $.jsx)(u, { children: X("cleanup:tools.resourceSync") }),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: X("cleanup:resourceSync.noDirectories")
			}),
			/* @__PURE__ */ (0, $.jsx)("a", {
				href: "/settings/library",
				className: "text-body-medium text-accent-600 underline",
				children: X("cleanup:resourceSync.setUpLibrary")
			})
		]
	});
}
function Dn({ tool: e, toast: t, failure: n }) {
	let r = (e) => t(e), i;
	switch (e) {
		case "organize":
			i = /* @__PURE__ */ (0, $.jsx)(ln, {
				toast: r,
				failure: n
			});
			break;
		case "resource-sync":
			i = /* @__PURE__ */ (0, $.jsx)(En, { toast: t });
			break;
		case "orphan-records":
			i = /* @__PURE__ */ (0, $.jsx)(mn, { toast: r });
			break;
		case "media-repair":
			i = /* @__PURE__ */ (0, $.jsx)(Ut, { toast: r });
			break;
		case "links":
			i = /* @__PURE__ */ (0, $.jsx)($t, {});
			break;
		case "batch-delete": i = /* @__PURE__ */ (0, $.jsx)(_n, { toast: r });
	}
	return /* @__PURE__ */ (0, $.jsx)(Mt, { children: i });
}
// src/react/data-cleanup/data-cleanup-page.tsx
function On(e, t) {
	return e.data === void 0 ? e.isError ? {
		figure: X("cleanup:overview.loadFailed"),
		state: "error"
	} : {
		figure: X("cleanup:overview.loading"),
		state: "loading"
	} : t(e.data);
}
function kn({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ (0, $.jsx)("button", {
		type: "button",
		className: at({ interactive: !0 }),
		"data-cleanup-go": e,
		"data-entry-state": r.state,
		"aria-busy": r.state === "loading" || void 0,
		onClick: () => i(e),
		children: /* @__PURE__ */ (0, $.jsx)(k, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
function An({ tool: e, navigate: t }) {
	let n = Y(e.icon);
	return /* @__PURE__ */ (0, $.jsx)(Bt, {
		label: e.title,
		icon: n,
		summary: e.description,
		attributes: { "data-cleanup-tool": e.key },
		onOpen: () => t(e.path + location.search)
	});
}
var jn = Y("square-check-big"), Mn = Y("sparkles"), Nn = Y("file-stack"), Pn = Y("file-archive"), Fn = Y("trash"), In = () => {
	for (let e of [
		me,
		ce,
		c,
		h
	]) J.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function Ln({ toast: e, open: t, navigate: n }) {
	let o = Z({
		queryKey: me,
		queryFn: ({ signal: e }) => qe(e)
	}), s = Z({
		queryKey: ce,
		queryFn: ({ signal: e }) => Ue(e)
	}), l = Z({
		queryKey: c,
		queryFn: ({ signal: e }) => Ne(e)
	}), u = Z({
		queryKey: h,
		queryFn: ({ signal: e }) => Pe(e)
	}), d = Z({
		queryKey: P,
		queryFn: ({ signal: e }) => Je(e)
	});
	return (0, Q.useEffect)(() => {
		let e = i[location.hash];
		e && rt.replace(e + location.search);
	}, []), /* @__PURE__ */ (0, $.jsxs)(Mt, { children: [
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-pending",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(M, {
				id: "cleanup-pending",
				children: X("cleanup:overview.needsAttention")
			}), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: oe,
				children: [
					/* @__PURE__ */ (0, $.jsx)(kn, {
						section: "review",
						label: X("cleanup:overview.review"),
						icon: jn,
						open: t,
						value: On(o, ht)
					}),
					/* @__PURE__ */ (0, $.jsx)(kn, {
						section: "duplicates",
						label: X("cleanup:overview.duplicates"),
						icon: Nn,
						open: t,
						value: On(l, (e) => Number(e.total || 0) ? {
							figure: X("cleanup:overview.duplicateGroups", {
								count: Number(e.total),
								files: Number(e.files || 0).toLocaleString()
							}),
							meta: X("cleanup:overview.reclaimable", { size: Xe(e.reclaimable || 0) })
						} : { figure: X("cleanup:overview.noDuplicates") })
					}),
					/* @__PURE__ */ (0, $.jsx)(kn, {
						section: "ads",
						label: X("cleanup:overview.junkFiles"),
						icon: Pn,
						open: t,
						value: On(u, (e) => ({
							figure: X("cleanup:overview.junkUndecided", { count: Number(e.pending_total || 0) }),
							meta: $e(e)
						}))
					}),
					/* @__PURE__ */ (0, $.jsx)(kn, {
						section: "quality",
						label: X("cleanup:overview.hdUpgrades"),
						icon: Mn,
						open: t,
						value: On(s, (e) => ({ figure: X("cleanup:overview.upgradesPending", { count: Number(e.total || 0) }) }))
					}),
					/* @__PURE__ */ (0, $.jsx)(kn, {
						section: "trash",
						label: X("cleanup:overview.trash"),
						icon: Fn,
						open: t,
						value: On(d, (e) => ({
							figure: X("cleanup:overview.trashCount", { count: Number(e.total || 0) }),
							meta: e.total ? X("cleanup:overview.trashSize", { size: Xe(e.bytes || 0) }) : X("cleanup:overview.trashEmptyHint")
						}))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, $.jsx)("div", {
			id: "libraryProcessing",
			className: "scroll-mt-20",
			children: /* @__PURE__ */ (0, $.jsx)(x, {
				toast: (t) => e(t),
				onComplete: In
			})
		}),
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-maintenance",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(M, {
				id: "cleanup-maintenance",
				children: X("cleanup:overview.maintenanceSection")
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: r,
				children: a.filter((e) => e.key !== "batch-delete").map((e) => /* @__PURE__ */ (0, $.jsx)(An, {
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
				children: X("cleanup:overview.deletionSection")
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: r,
				children: a.filter((e) => e.key === "batch-delete").map((e) => /* @__PURE__ */ (0, $.jsx)(An, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		})
	] });
}
export { Ln as DataCleanupPage, Dn as DataCleanupToolPage };

//# debugId=b0436991-673b-4a80-84b9-d1596fe944b9