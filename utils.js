// Utility functions for the application

// Format numbers with commas for thousands
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Generate chart colors with slight variations
function generateColors(baseColor, count) {
    const colors = [];
    
    // Define color variations for different charts
    const colorPalettes = {
        blue: ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'],
        indigo: ['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#e0e7ff'],
        purple: ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe'],
        green: ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'],
        orange: ['#f59e0b', '#fbbf24', '#fcd34d', '#fde68a', '#fef3c7'],
        red: ['#ef4444', '#f87171', '#fca5a5', '#fecaca', '#fee2e2'],
    };
    
    // Select color palette based on baseColor
    let palette = colorPalettes[baseColor] || colorPalettes.indigo;
    
    // If we need more colors than the base palette has
    if (count > palette.length) {
        // Generate additional colors with opacity variations
        for (let i = 0; i < count; i++) {
            if (i < palette.length) {
                colors.push(palette[i]);
            } else {
                // For additional colors, cycle through the palette with opacity variations
                const baseIndex = i % palette.length;
                const opacity = 0.9 - (Math.floor(i / palette.length) * 0.2);
                colors.push(hexToRgba(palette[baseIndex], opacity));
            }
        }
    } else {
        // Use the first 'count' colors from the palette
        colors.push(...palette.slice(0, count));
    }
    
    return colors;
}

// Convert hex color to rgba
function hexToRgba(hex, opacity) {
    // Remove the hash
    hex = hex.replace('#', '');
    
    // Parse the hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Return rgba value
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// Common chart options to maintain consistent styling
const chartDefaults = {
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                padding: 15,
                usePointStyle: true,
                boxWidth: 8,
                font: {
                    family: "'Inter', sans-serif",
                    size: 11
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#18181b',
            bodyColor: '#18181b',
            borderColor: '#e4e4e7',
            borderWidth: 1,
            padding: 10,
            cornerRadius: 4,
            bodyFont: {
                family: "'Inter', sans-serif",
                size: 12
            },
            titleFont: {
                family: "'Inter', sans-serif",
                size: 13,
                weight: 'bold'
            }
        }
    },
    responsive: true,
    maintainAspectRatio: false,
};
