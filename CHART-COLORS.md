# Dynamic Chart Colors

All charts now dynamically adapt their colors based on the selected style (Minimal, Neumorphism, or Neobrutalism).

## How It Works

The `useChartColors()` hook provides style-specific color schemes that automatically update when the user switches styles.

## Color Schemes

### Minimal Style
- **Primary**: ["#FF99C8", "#FCF6BD", "#D0F4DE", "#A9DEF9"] - Pastel pink, yellow, mint, blue
- **Secondary**: ["#E4C1F9", "#A9DEF9"] - Lavender, blue
- **Tertiary**: ["#FF99C8", "#E4C1F9"] - Pink, lavender
- **Quaternary**: ["#E4C1F9", "#FF99C8", "#A9DEF9", "#D0F4DE", "#FCF6BD"] - 5-color mix
- **Single**: "#A9DEF9" - Blue

### Neumorphism Style
- **Primary**: ["#667EEA", "#764BA2", "#F093FB", "#8B9DF0"] - Purple gradient tones
- **Secondary**: ["#667EEA", "#764BA2"] - Purple, violet
- **Tertiary**: ["#667EEA", "#F093FB"] - Purple, pink
- **Quaternary**: ["#667EEA", "#764BA2", "#F093FB", "#8B9DF0", "#A78BFA"] - 5-color purple mix
- **Single**: "#667EEA" - Primary purple

### Neobrutalism Style
- **Primary**: ["#FFD700", "#FF6B6B", "#4ECDC4", "#FF9F1C"] - Bold yellow, red, turquoise, orange
- **Secondary**: ["#FFD700", "#4ECDC4"] - Yellow, turquoise
- **Tertiary**: ["#FF6B6B", "#FFD700"] - Red, yellow
- **Quaternary**: ["#FFD700", "#FF6B6B", "#4ECDC4", "#06D6A0", "#9D4EDD"] - 5-color bold mix
- **Single**: "#4ECDC4" - Turquoise

## Charts Using Each Scheme

### Primary Colors (4 colors)
- **Used Devices** (Donut Chart)
- **Performance Metrics** (Radial Chart)

### Secondary Colors (2 colors)
- **Payments Overview** (Area Chart)
- **Revenue Growth** (Area Chart)

### Tertiary Colors (2 colors)
- **Week's Profit** (Bar Chart)

### Quaternary Colors (5 colors)
- **Sales by Category** (Bar Chart)

### Single Color
- **Campaign Visitors** (Line Chart)

## Implementation

Each chart component imports `useChartColors()` and applies the appropriate color scheme:

```tsx
import { useChartColors } from "@/hooks/use-chart-colors";

export function MyChart() {
  const chartColors = useChartColors();
  
  const options: ApexOptions = {
    colors: chartColors.primary, // or .secondary, .tertiary, etc.
    // ... rest of options
  };
}
```

The colors automatically update when the user switches styles via the `/styles` page.
