# 🐛 Bug Report - KidsZen Toys Website

Generated: 2025-01-XX

## 🚨 Critical Bugs

### 1. **Footer Copyright Year Error**
- **Location**: `index.html` line ~416
- **Issue**: Footer shows "© 2026 KidsZen Toys" - incorrect year
- **Current**: `<p>© 2026 KidsZen Toys . All rights reserved.</p>`
- **Expected**: Should be 2025 or dynamic current year
- **Impact**: Unprofessional, confusing to users
- **Priority**: HIGH

### 2. **Character Encoding Issues in products.js**
- **Location**: `products.js` (combos section)
- **Issue**: Special characters are corrupted
  - Rupee symbol: "₹" displayed as "â‚¹"
  - Em dash: "—" displayed as "â€""
  - Smart quotes: """ displayed as incorrect characters
- **Root cause**: File saved with incorrect UTF-8 encoding
- **Impact**: Price display broken, descriptions garbled
- **Priority**: CRITICAL
- **Examples**:
  ```javascript
  price: "â‚¹1,050",  // Should be: ₹1,050
  "Crazy Samosa â€" a fast-paced"  // Should be: Crazy Samosa — a fast-paced
  ```

### 3. **Extra Space in Footer Copyright**
- **Location**: `index.html` line ~416
- **Issue**: Extra space before period: "KidsZen Toys ."
- **Current**: `© 2026 KidsZen Toys . All rights reserved.`
- **Expected**: `© 2025 KidsZen Toys. All rights reserved.`
- **Impact**: Looks unprofessional
- **Priority**: MEDIUM

---

## ⚠️ Medium Priority Issues

### 4. **Inconsistent Modal Function Calls**
- **Location**: Multiple files
- **Issue**: Mix of `openModal(product)` and `openModalById(id)` calls
- **Status**: Currently functional but inconsistent
- **Recommendation**: Standardize to `openModalById(id)` everywhere for consistency
- **Files affected**: `app.js`, `index.html`

### 5. **Missing Combo Pack Data (products.js truncated)**
- **Location**: `products.js` end of file
- **Issue**: File was truncated when reading at 30000 chars
- **Status**: Need to verify combos array is complete
- **Impact**: Combo packs may not display correctly
- **Priority**: MEDIUM (needs verification)

### 6. **Inconsistent Button Styling**
- **Location**: `styles.css` - `.product-actions` and `.bs-actions`
- **Issue**: Different button heights (42px vs 46px) between product cards and bestseller section
- **Status**: Intentional or oversight?
- **Impact**: Minor visual inconsistency
- **Priority**: LOW

### 7. **Age Filter "All Products" Not Clearing Search**
- **Location**: `app.js` - `filterProducts()` function
- **Issue**: When user searches, then clicks age filter, search input doesn't clear
- **Expected**: Clicking age filter should clear search input
- **Impact**: User confusion - filter shows but search term remains
- **Priority**: MEDIUM

---

## 🔍 Minor Issues & Recommendations

### 8. **CSS Margin Fragment**
- **Location**: `styles.css` around line 740
- **Issue**: Stray `margin-bottom: 6px;` before `.product-tagline`
- **Status**: Doesn't break anything but is sloppy
- **Priority**: LOW

### 9. **Accessibility Issues**
- **Missing ARIA labels**: Some interactive elements lack proper ARIA attributes
- **Keyboard navigation**: Product cards have tabindex but some buttons don't handle Enter key properly
- **Color contrast**: Need to verify WCAG AA compliance for text colors
- **Priority**: MEDIUM (for production readiness)

### 10. **Mobile Search Bar Hidden**
- **Location**: `styles.css` media query @768px
- **Issue**: `.navbar-search { display: none; }` on mobile
- **Impact**: Mobile users can't search products
- **Recommendation**: Keep search visible or add mobile search toggle
- **Priority**: MEDIUM

### 11. **Hero Background Image Error Handling**
- **Location**: `app.js` - `heroBgImg.onerror` handler
- **Issue**: Fallback gradient is okay but no user feedback
- **Recommendation**: Consider placeholder or different handling
- **Priority**: LOW

### 12. **Combo Block Display Logic**
- **Location**: `app.js` - `renderCombos()` function
- **Issue**: `comboBlock.style.display = filteredCombos.length > 0 ? '' : 'none';`
- **Concern**: Setting display to empty string `''` may not properly show block
- **Recommendation**: Use `'block'` instead of `''`
- **Priority**: LOW (works but not best practice)

---

## 🎨 Design Inconsistencies

### 13. **Footer Logo Margin Hack**
- **Location**: `styles.css` - `.footer-logo`
- **Issue**: Using negative margin to align: `margin-left: -8px;`
- **Impact**: Fragile, may break with logo size changes
- **Recommendation**: Use flexbox alignment properly
- **Priority**: LOW (works but not maintainable)

### 14. **Bestseller Image Size Increase**
- **Location**: `styles.css` - `.bs-img-wrap` and `.bs-img`
- **Current sizes**: 380px×480px (recently increased from 320px×420px)
- **Concern**: Verify this doesn't cause overflow on smaller laptops
- **Priority**: LOW (testing needed)

---

## ✅ Security & Performance

### 15. **External Link Security**
- **Status**: All external links properly use `rel="noopener"` ✓
- **Amazon links**: Using search URLs, not direct product links
- **Priority**: LOW (already handled correctly)

### 16. **Image Loading**
- **Status**: Using `loading="lazy"` on images ✓
- **Recommendation**: Consider adding width/height attributes to prevent layout shift
- **Priority**: LOW

### 17. **No Input Sanitization**
- **Location**: Search input in `app.js`
- **Issue**: User search input is used directly in `toLowerCase()` and `includes()`
- **Status**: Currently safe (no XSS risk) but should validate
- **Priority**: LOW (functional but worth noting)

---

## 🧪 Testing Recommendations

### Tests Needed:
1. ✅ Test age filtering with all categories (0-2, 2-5, 5-10, all)
2. ✅ Test search with various queries
3. ⚠️ Test search + age filter interaction
4. ✅ Test modal opening from all entry points
5. ⚠️ Test on mobile devices (especially search bar hidden issue)
6. ⚠️ Test combo pack display for all age groups
7. ⚠️ Verify all product images load correctly
8. ⚠️ Test keyboard navigation and accessibility
9. ⚠️ Verify encoding displays correctly in all browsers

---

## 📋 Summary

| Priority | Count | Status |
|----------|-------|--------|
| CRITICAL | 1 | Encoding issues in products.js |
| HIGH | 1 | Wrong copyright year |
| MEDIUM | 5 | Search/filter UX, mobile search, accessibility |
| LOW | 11 | Code quality, minor bugs |

**Total Issues Found**: 18

**Immediate Action Required**:
1. Fix character encoding in `products.js` (CRITICAL)
2. Update copyright year to 2025 (HIGH)
3. Remove extra space in footer text (MEDIUM)
4. Fix mobile search visibility (MEDIUM)

---

## 🔧 Quick Fix Commands

```bash
# Fix copyright year
sed -i 's/2026/2025/g' index.html

# Fix extra space in copyright
sed -i 's/KidsZen Toys \./KidsZen Toys./g' index.html
```

**Note**: Character encoding issues in products.js require manual re-saving with UTF-8 encoding.

