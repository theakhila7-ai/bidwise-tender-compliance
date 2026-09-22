(function () {
  const cases = [
    {
      id: 'network', short: 'Technology procurement', name: 'Network infrastructure', score: 82, outcome: 'Evidence requires review', tone: 'review',
      description: 'A fictional district office procurement of managed switches and wireless access points. The bidder pack has strong core documentation but a few gaps require review.',
      summary: 'Three items need attention before a final decision.',
      docs: [
        { name: 'Tender_Network_Equipment.pdf', kind: 'Tender · 2 pages', page: 'Page 1 of 2', html: '<p class="pdf-page-kicker">DISTRICT PROCUREMENT OFFICE · TRAINING REFERENCE DPO/NET/2026/041</p><h3>Supply of network infrastructure equipment</h3><p>Invitation for bids for the supply, installation and onsite support of managed network equipment at district service offices.</p><h4>Eligibility and documentary requirements</h4><ul><li>Valid entity registration and identity record of the bidding entity.</li><li>Average annual turnover of ₹50 lakh during the last three financial years.</li><li>Signed integrity declaration and non-debarment affidavit.</li><li>Three years onsite warranty and support for supplied equipment.</li></ul><p class="pdf-meta">Training reference only · Not issued by a government authority</p>' },
        { name: 'Bidder_Technical_Offer.pdf', kind: 'Bidder pack · 3 pages', page: 'Page 2 of 3', html: '<p class="pdf-page-kicker">BIDDER SUBMISSION · NORTHSTAR NETWORKS LLP</p><div class="pdf-stamp">TECHNICAL OFFER</div><h3>Compliance statement</h3><p>We submit our offer for the supply and commissioning of 24-port managed switches and Wi-Fi 6 access points.</p><h4>Documents enclosed</h4><ul><li>Entity registration record — Annexure A</li><li>Entity identity record — Annexure B</li><li>Turnover statement — Annexure C</li><li>Warranty undertaking — Annexure D</li></ul><p class="pdf-meta">Training reference only · Signature on the integrity declaration requires review.</p>' },
        { name: 'Turnover_Statement.pdf', kind: 'Supporting proof · 1 page', page: 'Page 1 of 1', html: '<p class="pdf-page-kicker">ILLUSTRATIVE TURNOVER STATEMENT</p><h3>Turnover declaration</h3><p>This statement records the following turnover values for Northstar Networks LLP.</p><h4>Reported values</h4><ul><li>FY 2022–23: ₹44.2 lakh</li><li>FY 2023–24: ₹52.8 lakh</li><li>FY 2024–25: ₹61.0 lakh</li></ul><p>The values are available for review against the tender’s stated calculation period.</p><p class="pdf-meta">Training reference only · Page 1</p>' }
      ],
      checks: [
        ['pass', 'Entity registration record', 'The registration identifier and entity name are consistent across the record and bid cover letter.', 'Entity_Registration.pdf · p. 01'],
        ['pass', 'Entity identity record', 'An identity record for the bidding entity was located.', 'Entity_Identity_Record.pdf · p. 01'],
        ['pass', 'EMD instrument enclosed', 'Bank guarantee reference is present in the bid covering letter.', 'Bid_Covering_Letter.pdf · p. 02'],
        ['review', 'Average annual turnover', 'Turnover values are present; the required three-year calculation period needs officer confirmation.', 'Turnover_Statement.pdf · p. 01'],
        ['action', 'Signed integrity pact', 'A template was located but the executed signature block was not found.', 'No matching executed evidence'],
        ['action', 'Latest audited financial statement', 'Financial statements for the most recent financial year were not located.', 'No matching evidence'],
        ['pass', 'No blacklisting affidavit', 'The affidavit is enclosed and names the bidding entity.', 'Non_Blacklisting_Affidavit.pdf · p. 01'],
        ['pass', 'Three-year onsite warranty', 'Warranty undertaking states three years of onsite support.', 'Warranty_Undertaking.pdf · p. 01']
      ]
    },
    {
      id: 'solar', short: 'Rural infrastructure', name: 'Solar water systems', score: 89, outcome: 'Evidence largely complete', tone: 'pass',
      description: 'A fictional rural services procurement of solar water systems. This case contains a well-supported bidder pack with one service-coverage follow-up item.',
      summary: 'The core eligibility checks are supported; one service-detail confirmation remains.',
      docs: [
        { name: 'Tender_Solar_Water_Systems.pdf', kind: 'Tender · 2 pages', page: 'Page 1 of 2', html: '<p class="pdf-page-kicker">RURAL SERVICES OFFICE · TRAINING REFERENCE RSO/SWS/2026/118</p><h3>Solar water system installation</h3><p>Supply, installation and commissioning of solar water systems at identified agricultural service clusters.</p><h4>Key requirements</h4><ul><li>Certified solar water system configuration.</li><li>Minimum two completed comparable installations.</li><li>Five-year comprehensive maintenance support.</li><li>Valid entity registration and non-debarment declaration.</li></ul><p class="pdf-meta">Training reference only · Documentary review and field verification are separate steps.</p>' },
        { name: 'Bidder_Solar_Submission.pdf', kind: 'Bidder pack · 4 pages', page: 'Page 3 of 4', html: '<p class="pdf-page-kicker">FICTIONAL BIDDER SUBMISSION · HORIZON WATER SYSTEMS</p><div class="pdf-stamp">ENCLOSED</div><h3>Service undertaking</h3><p>We undertake to provide five-year maintenance support for the solar water systems supplied under the tender.</p><h4>Supporting files in this pack</h4><ul><li>Product compliance sheet</li><li>Two installation completion certificates</li><li>Entity registration copies</li><li>Maintenance service undertaking</li></ul><p class="pdf-meta">Illustrative bidder pack · Area-wise service roster is referred to in Annexure IV.</p>' },
        { name: 'Completion_Certificate.pdf', kind: 'Supporting proof · 1 page', page: 'Page 1 of 1', html: '<p class="pdf-page-kicker">ILLUSTRATIVE PROJECT COMPLETION CERTIFICATE</p><h3>Solar water system installation</h3><p>This reference certificate records satisfactory completion of 24 solar water system installations in the 2024–25 programme.</p><h4>Certification details</h4><ul><li>Issuer: Field Services Unit</li><li>Scope: Supply, installation and commissioning</li><li>Status: Completed and accepted</li></ul><p class="pdf-meta">Fictional training document · Reference FSU/SWS/25/48</p>' }
      ],
      checks: [
        ['pass', 'Entity registration record', 'The registration record and bidder entity name match the submitted cover letter.', 'Entity_Registration.pdf · p. 01'],
        ['pass', 'Entity identity record', 'The entity identity record for Horizon Water Systems was located.', 'Entity_Identity_Record.pdf · p. 01'],
        ['pass', 'Product configuration record', 'The submitted product sheet cites the required certified configuration.', 'Product_Compliance_Sheet.pdf · p. 02'],
        ['pass', 'Comparable installation experience', 'Two completion certificates for comparable solar pump work were found.', 'Completion_Certificates.pdf · pp. 01–02'],
        ['review', 'Service coverage', 'A service roster is included; officer confirmation is needed for all intended delivery locations.', 'Bidder_Solar_Submission.pdf · p. 03'],
        ['pass', 'Five-year maintenance undertaking', 'The bidder signed the five-year service undertaking.', 'Service_Undertaking.pdf · p. 01'],
        ['pass', 'No blacklisting affidavit', 'Current affidavit is enclosed.', 'Non_Blacklisting_Affidavit.pdf · p. 01'],
        ['pass', 'Bid security declaration', 'Bid security declaration is present and signed.', 'Bid_Security_Declaration.pdf · p. 01']
      ]
    },
    {
      id: 'civil', short: 'Public works', name: 'Community facility works', score: 68, outcome: 'Evidence gap identified', tone: 'action',
      description: 'A fictional public works tender for a community facility extension. This case shows why financial proof and experience certificates need careful evidence checks.',
      summary: 'Missing financial proof and incomplete experience evidence require action before evaluation can progress.',
      docs: [
        { name: 'Tender_Community_Facility_Works.pdf', kind: 'Tender · 3 pages', page: 'Page 1 of 3', html: '<p class="pdf-page-kicker">PUBLIC WORKS OFFICE · TRAINING REFERENCE PWO/CFW/2026/072</p><h3>Extension of community service facility</h3><p>Construction of a ward extension including structural, electrical and sanitary works.</p><h4>Eligibility requirements</h4><ul><li>Appropriate contractor registration.</li><li>Comparable completed civil works of required value.</li><li>Audited financial statements for the last three years.</li><li>Bid security, entity registration and valid labour records.</li></ul><p class="pdf-meta">Training reference only · All certificates must be valid on the closing date.</p>' },
        { name: 'Bidder_Civil_Offer.pdf', kind: 'Bidder pack · 2 pages', page: 'Page 1 of 2', html: '<p class="pdf-page-kicker">FICTIONAL BIDDER SUBMISSION · RIVERSTONE CONSTRUCTIONS</p><h3>Bid cover letter</h3><p>We submit our bid for the extension of the community service facility as per the scope and specifications stated in the tender reference.</p><h4>Enclosures listed</h4><ul><li>Entity registration and contractor certificate</li><li>One work completion letter</li><li>Bid security instrument</li><li>Labour welfare registration</li></ul><p class="pdf-meta">Illustrative bidder pack · Audited accounts are not listed in the enclosure index.</p>' },
        { name: 'Work_Completion_Letter.pdf', kind: 'Supporting proof · 1 page', page: 'Page 1 of 1', html: '<p class="pdf-page-kicker">ILLUSTRATIVE WORK COMPLETION LETTER</p><div class="pdf-stamp">PARTIAL</div><h3>Renovation work certificate</h3><p>This reference letter records completion of renovation works at an administrative building.</p><h4>Note for evaluation</h4><p>The contract value and structural-work scope are not stated in this letter. These details are required to verify similarity against the tender.</p><p class="pdf-meta">Fictional training document · Issuer: Engineering Services Unit</p>' }
      ],
      checks: [
        ['pass', 'Entity registration record', 'The entity registration document is present and readable.', 'Entity_Registration.pdf · p. 01'],
        ['pass', 'Class A contractor registration', 'Registration certificate is enclosed and within stated validity.', 'Contractor_Registration.pdf · p. 01'],
        ['review', 'Similar work experience', 'A completion letter exists but does not state contract value or comparable structural scope.', 'Work_Completion_Letter.pdf · p. 01'],
        ['action', 'Audited financial statements', 'Required three-year audited financial statements were not located.', 'No matching evidence'],
        ['pass', 'Bid security instrument', 'Bid security reference and issuing bank details were found.', 'Bid_Security.pdf · p. 01'],
        ['review', 'Labour welfare registration', 'Registration is supplied; its validity date requires officer confirmation.', 'Labour_Registration.pdf · p. 01'],
        ['action', 'Integrity declaration', 'No signed integrity declaration was found in the bidder pack.', 'No matching evidence'],
        ['pass', 'Bid cover letter', 'Cover letter is signed and identifies the tender reference.', 'Bidder_Civil_Offer.pdf · p. 01']
      ]
    },
    {
      id: 'medical', short: 'Health supplies', name: 'Essential care supplies', score: 76, outcome: 'Evidence requires review', tone: 'review',
      description: 'A fictional clinical services procurement of essential care consumables. It highlights product certification, delivery timelines and quality-document checks.',
      summary: 'The bid is largely supported, but quality certificates and delivery commitments need confirmation.',
      docs: [
        { name: 'Tender_Essential_Care_Supplies.pdf', kind: 'Tender · 2 pages', page: 'Page 1 of 2', html: '<p class="pdf-page-kicker">CLINICAL SERVICES OFFICE · TRAINING REFERENCE CSO/ECS/2026/019</p><h3>Essential care consumables</h3><p>Rate contract for supply of sterile gloves, syringes, infusion sets and dressing materials.</p><h4>Documentary requirements</h4><ul><li>Manufacturer authorisation for supplied brands.</li><li>Applicable quality certificates.</li><li>Relevant distribution licence where applicable.</li><li>Commitment to delivery within 21 days of purchase order.</li></ul><p class="pdf-meta">Training reference only · Product samples may be requested during technical evaluation.</p>' },
        { name: 'Bidder_Care_Supplies_Offer.pdf', kind: 'Bidder pack · 3 pages', page: 'Page 2 of 3', html: '<p class="pdf-page-kicker">FICTIONAL BIDDER SUBMISSION · CARELINE SUPPLY CO.</p><h3>Authorisation and delivery note</h3><p>Careline Supply Co. submits manufacturer authorisation for the indicated consumables and confirms supply capability.</p><h4>Documents cited</h4><ul><li>Manufacturer authorisation letter</li><li>Entity registration copies</li><li>Quality certificate for gloves and syringes</li><li>Delivery schedule note</li></ul><p class="pdf-meta">Illustrative bidder pack · Infusion-set certificate is referred to but not appended.</p>' },
        { name: 'Manufacturer_Authorisation.pdf', kind: 'Supporting proof · 1 page', page: 'Page 1 of 1', html: '<p class="pdf-page-kicker">ILLUSTRATIVE MANUFACTURER AUTHORISATION LETTER</p><h3>Authorised distributor confirmation</h3><p>Careline Supply Co. is authorised to quote, supply and provide post-supply support for the listed sterile consumables.</p><h4>Covered product categories</h4><ul><li>Sterile examination gloves</li><li>Disposable syringes</li><li>Sterile dressing materials</li></ul><p class="pdf-meta">Training reference only · Validity: 01 April 2026 to 31 March 2027</p>' }
      ],
      checks: [
        ['pass', 'Entity registration record', 'The registration record matches the bidder entity details.', 'Entity_Registration.pdf · p. 01'],
        ['pass', 'Manufacturer authorisation', 'Authorisation letter covers the listed glove, syringe and dressing categories.', 'Manufacturer_Authorisation.pdf · p. 01'],
        ['review', 'Quality certificate for IV sets', 'The bid references an IV set certificate, but the certificate is not in the submitted pack.', 'No matching appended evidence'],
        ['pass', 'Quality certificate for gloves', 'Applicable quality certificate was located for the glove product line.', 'Quality_Certificate_Gloves.pdf · p. 01'],
        ['pass', 'Entity identity record', 'The entity identity record is available and legible.', 'Entity_Identity_Record.pdf · p. 01'],
        ['review', '21-day delivery commitment', 'Delivery note says “prompt delivery” but does not state the tender’s 21-day commitment.', 'Bidder_Care_Supplies_Offer.pdf · p. 02'],
        ['pass', 'No blacklisting affidavit', 'Signed affidavit is included in the bidder pack.', 'Non_Blacklisting_Affidavit.pdf · p. 01'],
        ['pass', 'Bid cover letter', 'Cover letter names the tender and is signed by the authorised signatory.', 'Bid_Cover_Letter.pdf · p. 01']
      ]
    }
  ];
  const pipeline = ['Read tender document', 'Extract requirements', 'Organise bidder evidence', 'Compare rules and data', 'Flag incomplete proof', 'Prepare review summary'];
  const state = { caseId: 'network', docIndex: 0, tender: null, bidders: [], filter: 'all', demo: false, resultData: null, score: 82 };
  const byId = id => document.getElementById(id);
  const currentCase = () => cases.find(item => item.id === state.caseId) || cases[0];
  const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;' }[char]));
  const bytes = value => value < 1024 * 1024 ? `${Math.ceil(value / 1024)} KB` : `${(value / 1024 / 1024).toFixed(1)} MB`;
  const mapChecks = checks => checks.map(([status, title, reason, evidence]) => ({ status, title, reason, evidence }));

  function route() {
    const key = (location.hash || '#/').replace('#/', '') || 'home';
    document.querySelectorAll('[data-view]').forEach(view => view.hidden = view.dataset.view !== key);
    if (key === 'workspace') { renderCases(); renderDocuments(); renderFiles(); }
    if (key === 'results') renderResults();
    window.scrollTo(0, 0);
  }
  function toast(message) { const el = byId('toast'); el.textContent = message; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 3200); }

  function renderCases() {
    byId('case-grid').innerHTML = cases.map(item => `<button class="case-card ${item.id === state.caseId ? 'active' : ''}" data-case="${item.id}" type="button" aria-pressed="${item.id === state.caseId}"><span class="small-label">${item.short}</span><h3>${item.name}</h3><p>${item.description}</p><div class="case-foot"><span class="outcome ${item.tone}">${item.outcome}</span><b>${item.score}<small>/100</small></b></div></button>`).join('');
    document.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click', () => { state.caseId = button.dataset.case; state.docIndex = 0; state.demo = true; state.resultData = mapChecks(currentCase().checks); state.score = currentCase().score; renderCases(); renderDocuments(); }));
  }
  function renderDocuments() {
    const item = currentCase(), selectedDocument = item.docs[state.docIndex] || item.docs[0];
    byId('case-description').textContent = item.description;
    byId('document-list').innerHTML = item.docs.map((doc, index) => `<button class="doc-choice ${index === state.docIndex ? 'active' : ''}" data-doc="${index}" type="button"><span class="doc-icon">PDF</span><span><b>${doc.name}</b><small>${doc.kind}</small></span></button>`).join('');
    byId('pdf-name').textContent = selectedDocument.name;
    byId('pdf-pages').textContent = selectedDocument.page;
    byId('pdf-paper').innerHTML = selectedDocument.html;
    byId('document-list').querySelectorAll('[data-doc]').forEach(button => button.addEventListener('click', () => { state.docIndex = Number(button.dataset.doc); renderDocuments(); }));
  }
  function fileHtml(file) { return `<div class="file-item"><b title="${escape(file.name)}">${escape(file.name)}</b><small>${bytes(file.size)}</small><button type="button" aria-label="Remove ${escape(file.name)}">×</button></div>`; }
  function renderFiles() {
    const tenderSlot = byId('tender-slot'), bidderSlot = byId('bidder-slot');
    tenderSlot.innerHTML = state.tender ? fileHtml(state.tender) : 'No tender attached';
    bidderSlot.innerHTML = state.bidders.length ? state.bidders.map(fileHtml).join('') : 'No bidder documents attached';
    tenderSlot.querySelector('button')?.addEventListener('click', () => { state.tender = null; renderFiles(); });
    bidderSlot.querySelectorAll('button').forEach((button, index) => button.addEventListener('click', () => { state.bidders.splice(index, 1); renderFiles(); }));
    const ready = state.tender && state.bidders.length;
    byId('verify-button').disabled = !ready;
    byId('verify-hint').textContent = ready ? 'Ready to prepare the first-level assessment.' : 'Attach a tender and at least one bidder document to continue.';
  }
  function attach(input, kind) {
    const files = [...input.files];
    const invalid = files.find(file => !(/\.pdf$/i.test(file.name) || file.type === 'application/pdf') || file.size > 25 * 1024 * 1024);
    if (invalid) { toast('Please add PDF files smaller than 25 MB.'); input.value = ''; return; }
    state.demo = false; state.resultData = null;
    if (kind === 'tender') state.tender = files[0];
    else state.bidders = [...state.bidders, ...files.filter(file => !state.bidders.some(existing => existing.name === file.name && existing.size === file.size))];
    input.value = ''; renderFiles();
  }
  function startSample() { state.demo = true; state.resultData = mapChecks(currentCase().checks); state.score = currentCase().score; location.hash = '#/processing'; }
  async function fetchAssessment() {
    const form = new FormData(); form.append('tender', state.tender); state.bidders.forEach(file => form.append('bidders', file));
    const isSeparateLocalFrontend =
      ['localhost', '127.0.0.1'].includes(window.location.hostname) &&
      window.location.port === '5500';
    const apiBaseUrl = isSeparateLocalFrontend ? 'http://127.0.0.1:8000' : '';
    const response = await fetch(`${apiBaseUrl}/upload-tender-and-bidders`, { method: 'POST', body: form });
    if (!response.ok) throw new Error(`The compliance API returned ${response.status}`);
    const body = await response.json(), bidder = body.bidders?.[0];
    if (!bidder?.compliance) throw new Error('No compliance assessment was returned.');
    state.score = Math.round(Number(bidder.compliance.compliance_percentage) || 0);
    state.resultData = (bidder.compliance.checks || []).map(check => ({ status: check.status === 'COMPLIANT' ? 'pass' : check.status === 'NEEDS REVIEW' ? 'review' : 'action', title: check.requirement, reason: check.reason, evidence: check.evidence ? `${bidder.filename} · p. ${check.evidence_page || 1}` : 'No matching evidence' }));
    if (!state.resultData.length) throw new Error('No supported tender requirements were detected.');
  }
  function renderPipeline(active) {
    byId('pipeline').innerHTML = pipeline.map((step, index) => `<div class="pipe-step ${index < active ? 'done' : index === active ? 'active' : ''}"><span class="pipe-icon">${index < active ? '✓' : index + 1}</span><b>${step}</b><em>${index < active ? 'Done' : index === active ? 'Working' : 'Queued'}</em></div>`).join('');
    byId('progress-bar').style.width = `${Math.round(((active + 1) / pipeline.length) * 100)}%`;
    byId('processing-copy').textContent = active < pipeline.length - 1 ? `${pipeline[active]}…` : 'Your evidence-led assessment is ready.';
  }
  async function startPipeline() {
    let active = 0; renderPipeline(active);
    try {
      if (state.demo) { state.resultData = mapChecks(currentCase().checks); state.score = currentCase().score; } else await fetchAssessment();
      const timer = setInterval(() => { active += 1; if (active >= pipeline.length) { clearInterval(timer); setTimeout(() => location.hash = '#/results', 550); } else renderPipeline(active); }, 380);
    } catch (error) { toast(`${error.message} Start the FastAPI server or run a reference case.`); setTimeout(() => location.hash = '#/workspace', 900); }
  }
  function resultLanguage(data) {
    const review = data.filter(item => item.status === 'review').length, action = data.filter(item => item.status === 'action').length;
    if (action) return { note: 'Officer review recommended', heading: `${review + action} items need attention before a final decision.`, copy: 'The review table preserves the evidence found and calls out documents or details that are still missing.' };
    if (review) return { note: 'Confirmation recommended', heading: `${review} item${review === 1 ? '' : 's'} should be confirmed before a final decision.`, copy: 'The core review is supported by evidence; the remaining item is listed for officer confirmation.' };
    return { note: 'Evidence set complete', heading: 'All assessed requirements have matching evidence.', copy: 'The officer can now complete the required procurement review using the evidence register.' };
  }
  function renderResults() {
    const data = state.resultData || mapChecks(currentCase().checks), item = currentCase(), total = data.length;
    const pass = data.filter(row => row.status === 'pass').length, review = data.filter(row => row.status === 'review').length, action = data.filter(row => row.status === 'action').length, words = resultLanguage(data);
    byId('result-title').textContent = state.demo ? `${item.name} · Bidder review` : `${state.bidders[0]?.name || 'Bidder'} · Bidder review`;
    byId('result-context').textContent = state.demo ? 'Reference case · Assessment overview' : 'Uploaded documents · First-level assessment';
    byId('score').innerHTML = `${state.score}<small>/100</small>`; byId('score-meter').style.width = `${state.score}%`;
    byId('status-note').textContent = words.note; byId('decision-heading').textContent = words.heading; byId('decision-copy').textContent = words.copy;
    byId('stat-total').textContent = total; byId('stat-pass').textContent = pass; byId('stat-review').textContent = review; byId('stat-action').textContent = action;
    const shown = state.filter === 'all' ? data : data.filter(row => row.status === state.filter);
    const label = { pass: 'Verified', review: 'Review', action: 'Action' }, icon = { pass: '✓', review: '!', action: '×' };
    byId('findings').innerHTML = shown.map(row => `<div class="finding-row status-${row.status}"><span class="row-status">${icon[row.status]}</span><b class="row-title">${escape(row.title)}</b><span class="row-reason">${escape(row.reason)}</span><span class="row-evidence evidence">${escape(row.evidence)}</span><span class="row-label">${label[row.status]}</span></div>`).join('');
    byId('filters').querySelectorAll('button').forEach(button => { button.classList.toggle('active', button.dataset.filter === state.filter); button.onclick = () => { state.filter = button.dataset.filter; renderResults(); }; });
  }
  function downloadReport() {
    const data = state.resultData || mapChecks(currentCase().checks);
    const rows = data.map(row => `<tr><td>${escape(row.title)}</td><td>${row.status.toUpperCase()}</td><td>${escape(row.reason)}</td><td>${escape(row.evidence)}</td></tr>`).join('');
    const report = `<!doctype html><meta charset="utf-8"><title>BidWise assessment</title><style>body{font-family:Arial;color:#183247;max-width:900px;margin:50px auto;padding:20px}h1{color:#102d43}table{width:100%;border-collapse:collapse;margin-top:25px}th,td{text-align:left;padding:12px;border-bottom:1px solid #d9d7d0;font-size:13px}th{background:#102d43;color:#fff}.note{color:#667482}</style><h1>BidWise · Compliance assessment</h1><p class="note">First-level screening indicator. The final procurement decision remains with the authorised officer.</p><h2>Compliance indicator: ${state.score}/100</h2><table><thead><tr><th>Requirement</th><th>Status</th><th>Reason</th><th>Evidence</th></tr></thead><tbody>${rows}</tbody></table>`;
    const url = URL.createObjectURL(new Blob([report], { type: 'text/html' })), link = document.createElement('a'); link.href = url; link.download = 'bidwise-compliance-assessment.html'; link.click(); URL.revokeObjectURL(url);
  }
  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('hashchange', route); route();
    byId('tender-file').addEventListener('change', event => attach(event.target, 'tender')); byId('bidder-file').addEventListener('change', event => attach(event.target, 'bidder'));
    ['tender-file', 'bidder-file'].forEach(id => { const label = document.querySelector(`label[for="${id}"]`); ['dragenter', 'dragover'].forEach(type => label.addEventListener(type, event => { event.preventDefault(); label.classList.add('drag'); })); ['dragleave', 'drop'].forEach(type => label.addEventListener(type, event => { event.preventDefault(); label.classList.remove('drag'); })); label.addEventListener('drop', event => { const transfer = new DataTransfer(); [...event.dataTransfer.files].forEach(file => transfer.items.add(file)); byId(id).files = transfer.files; attach(byId(id), id === 'tender-file' ? 'tender' : 'bidder'); }); });
    byId('run-demo-home').addEventListener('click', startSample); byId('analyse-sample').addEventListener('click', startSample); byId('verify-button').addEventListener('click', () => location.hash = '#/processing'); byId('download-report').addEventListener('click', downloadReport);
    new MutationObserver(() => { if (!byId('processing').hidden && !byId('pipeline').children.length) startPipeline(); }).observe(byId('processing'), { attributes: true, attributeFilter: ['hidden'] });
  });
})();
