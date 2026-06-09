
function solveQuadratic(a, b, c) {
	if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
		throw new TypeError('Tham số a, b, c phải là số');
	}

	if (a === 0) {
		if (b === 0) {
			return { delta: null, roots: (c === 0 ? 'Infinite solutions' : []) };
		}
		return { delta: null, roots: [ -c / b ] };
	}

	const delta = b * b - 4 * a * c;

	if (delta < 0) {
		return { delta, roots: [] };
	}

	if (delta === 0) {
		const x = -b / (2 * a);
		return { delta, roots: [x] };
	}

	const sqrt = Math.sqrt(delta);
	const x1 = (-b + sqrt) / (2 * a);
	const x2 = (-b - sqrt) / (2 * a);
	return { delta, roots: [x1, x2] };
}

// DOM integration: kết nối với index.html để hiển thị kết quả
function gcd(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);
	while (b) {
		const t = a % b;
		a = b;
		b = t;
	}
	return a;
}

function simplifyFraction(numer, denom) {
	if (denom === 0) return [numer, denom];
	if (denom < 0) { numer = -numer; denom = -denom; }
	const g = gcd(numer, denom);
	return [ numer / g, denom / g ];
}

function isPerfectSquare(n) {
	if (!Number.isFinite(n) || n < 0) return false;
	const r = Math.floor(Math.sqrt(n));
	return r * r === n;
}

function formatFractionString(numer, denom) {
	const [p, q] = simplifyFraction(numer, denom);
	if (q === 1) return String(p);
	return `${p}/${q}`;
}

function formatSymbolicRoot(b, delta, sign, denom) {
	// sign is '+' or '-'
	const numerator = `(${ -b } ${sign} √${delta})`;
	return `${numerator}/${denom}`;
}

document.addEventListener('DOMContentLoaded', () => {
	const inputA = document.getElementById('inputA');
	const inputB = document.getElementById('inputB');
	const inputC = document.getElementById('inputC');
	const solveBtn = document.getElementById('solveBtn');

	const deltaOutput = document.getElementById('deltaOutput');
	const x1Output = document.getElementById('x1Output');
	const x2Output = document.getElementById('x2Output');
	const noteOutput = document.getElementById('noteOutput');

	function clearOutputs() {
		deltaOutput.textContent = '—';
		x1Output.textContent = '—';
		x2Output.textContent = '—';
		noteOutput.textContent = '—';
	}

	function renderFormattedResult(a, b, c, res) {
		clearOutputs();

		if (res.delta === null) {
			// linear or special
			if (Array.isArray(res.roots)) {
				if (res.roots.length === 0) {
					noteOutput.textContent = 'Vô nghiệm';
				} else if (res.roots.length === 1) {
					// root = -c / b
					const [p, q] = simplifyFraction(-c, b);
					x1Output.textContent = formatFractionString(p, q);
					noteOutput.textContent = 'Phương trình bậc nhất';
				}
			} else if (typeof res.roots === 'string') {
				noteOutput.textContent = (res.roots === 'Infinite solutions') ? 'Vô số nghiệm' : res.roots;
			}
			return;
		}

		const delta = res.delta;
		deltaOutput.textContent = String(delta);

		if (delta < 0) {
			noteOutput.textContent = 'Vô nghiệm thực';
			return;
		}

		if (delta === 0) {
			// x = -b / (2a)
			const [p, q] = simplifyFraction(-b, 2 * a);
			x1Output.textContent = formatFractionString(p, q);
			noteOutput.textContent = 'Nghiệm kép';
			return;
		}

		// delta > 0
		if (isPerfectSquare(delta)) {
			const sqrt = Math.floor(Math.sqrt(delta));
			const [p1, q1] = simplifyFraction(-b + sqrt, 2 * a);
			const [p2, q2] = simplifyFraction(-b - sqrt, 2 * a);
			x1Output.textContent = formatFractionString(p1, q1);
			x2Output.textContent = formatFractionString(p2, q2);
			noteOutput.textContent = 'Hai nghiệm phân biệt ';
		} else {
			// show symbolic root with sqrt
			const denom = 2 * a;
			x1Output.textContent = formatSymbolicRoot(b, delta, '+', denom);
			x2Output.textContent = formatSymbolicRoot(b, delta, '-', denom);
			noteOutput.textContent = 'Hai nghiệm (dạng chứa √)';
		}
	}

	solveBtn.addEventListener('click', () => {
		const aVal = inputA.value;
		const bVal = inputB.value;
		const cVal = inputC.value;

		if (aVal === '' || bVal === '' || cVal === '') {
			noteOutput.textContent = 'Vui lòng nhập đủ 3 hệ số';
			return;
		}

		const a = Number(aVal);
		const b = Number(bVal);
		const c = Number(cVal);

		if (!isFinite(a) || !isFinite(b) || !isFinite(c)) {
			noteOutput.textContent = 'Giá trị không hợp lệ';
			return;
		}

		try {
			const res = solveQuadratic(a, b, c);
			renderFormattedResult(a, b, c, res);
		} catch (err) {
			noteOutput.textContent = err.message || String(err);
		}
	});

	const resetBtn = document.getElementById('resetBtn');
	if (resetBtn) {
		resetBtn.addEventListener('click', () => {
			inputA.value = '';
			inputB.value = '';
			inputC.value = '';
			clearOutputs();
			inputA.focus();
		});
	}
});

