# Dashboard Style System

This dashboard supports multiple visual styles that can be switched dynamically.

## Available Styles

### 1. Minimal (Default)
- **Color Palette**: Soft pastels
  - Primary: #FF99C8 (Pink)
  - Secondary: #A9DEF9 (Light Blue)
  - Accent: #E4C1F9 (Lavender)
  - Background: #FFFFFF (White)
- **Design**: Clean, flat design with subtle shadows
- **Use Case**: Modern, professional dashboards

### 2. Neumorphism
- **Color Palette**: Purple gradient theme
  - Primary: #667EEA (Purple Blue)
  - Secondary: #764BA2 (Violet)
  - Accent: #F093FB (Pink)
  - Background: #E0E5EC (Light Gray)
- **Design**: Soft UI with embossed/debossed elements
- **Use Case**: Contemporary, tactile user experiences

## How to Switch Styles

1. Navigate to the **Styles** section in the sidebar (under "OTHERS")
2. Click on your preferred style card
3. The style will be applied immediately and saved to localStorage
4. The selected style persists across page refreshes

## Technical Implementation

### File Structure
```
src/
├── contexts/
│   └── style-context.tsx         # Style state management
├── lib/
│   └── style-config.ts            # Style configuration
├── css/
│   └── neumorphism.css            # Neumorphism-specific styles
├── components/
│   └── style-applier.tsx          # Dynamic style application
└── app/
    └── styles/
        └── page.tsx               # Style selection page
```

### Configuration Files
- `tailwind.config.ts` - Minimal style (default)
- `tailwind.neumorphism.config.ts` - Neumorphism style

### How It Works

1. **Style Context** (`style-context.tsx`):
   - Manages current style state
   - Saves preference to localStorage
   - Applies `data-style` attribute to `<html>` element

2. **CSS Overrides** (`neumorphism.css`):
   - Applies when `data-style="neumorphism"`
   - Uses neumorphic shadows (box-shadow)
   - Supports both light and dark modes

3. **Dynamic Colors** (`style-applier.tsx`):
   - Updates CSS custom properties based on selected style
   - Runs on client-side for immediate updates

## Adding a New Style

1. **Create Tailwind Config**:
   ```bash
   cp tailwind.config.ts tailwind.newstyle.config.ts
   ```

2. **Update Style Config** (`src/lib/style-config.ts`):
   ```typescript
   export const STYLE_CONFIGS = {
     // ... existing styles
     newstyle: {
       name: "New Style",
       description: "Your description",
       colors: { /* ... */ },
     },
   };
   ```

3. **Create CSS File** (if needed):
   ```css
   /* src/css/newstyle.css */
   [data-style="newstyle"] {
     /* Custom styles */
   }
   ```

4. **Import CSS** in `layout.tsx`:
   ```typescript
   import "@/css/newstyle.css";
   ```

5. **Update Type** in `style-context.tsx`:
   ```typescript
   type StyleType = "minimal" | "neumorphism" | "newstyle";
   ```

## Customization

### Modifying Existing Styles

#### Minimal Style
- Edit: `tailwind.config.ts`
- Change colors in the `colors` section

#### Neumorphism Style
- Edit: `tailwind.neumorphism.config.ts` for Tailwind tokens
- Edit: `src/css/neumorphism.css` for shadow effects

### Per-Component Styling

Use the `data-style` attribute for conditional styling:

```css
/* Apply only in neumorphism mode */
[data-style="neumorphism"] .my-component {
  box-shadow: var(--neu-shadow);
}

/* Apply only in minimal mode */
[data-style="minimal"] .my-component {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

## Dark Mode Support

Both styles support dark mode:
- Managed by `next-themes`
- Use `.dark` selector alongside `[data-style="..."]`
- Example: `[data-style="neumorphism"].dark`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- localStorage required for persistence
- CSS custom properties (CSS variables) required

## Performance Notes

- Style switching is instant (no page reload)
- Styles are loaded at build time
- Minimal runtime overhead
- localStorage caching for persistence
