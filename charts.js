document.addEventListener('DOMContentLoaded', function() {
    // Common chart configurations
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = '#71717a';
    
    // Shanghai Stock Exchange Composite Index Sector Distribution
    const sseChartCtx = document.getElementById('sseChart').getContext('2d');
    new Chart(sseChartCtx, {
        type: 'pie',
        data: {
            labels: ['金融', '工业', '材料', '消费', '能源', '医药', 'IT', '电信', '公用事业', '房地产'],
            datasets: [{
                data: [21.5, 16.3, 12.7, 12.1, 11.3, 8.6, 7.2, 4.2, 3.4, 2.7],
                backgroundColor: generateColors('indigo', 10),
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            ...chartDefaults,
            plugins: {
                ...chartDefaults.plugins,
                title: {
                    display: true,
                    text: '上证综指行业分布 (%)',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        }
    });
    
    // Shenzhen Component Index Sector Distribution
    const szseChartCtx = document.getElementById('szseChart').getContext('2d');
    new Chart(szseChartCtx, {
        type: 'pie',
        data: {
            labels: ['信息技术', '主要消费', '可选消费', '工业', '医药卫生', '金融', '材料', '电信服务', '房地产', '公用事业', '能源'],
            datasets: [{
                data: [20.2, 14.8, 13.6, 12.9, 11.5, 9.8, 8.3, 4.1, 2.4, 1.6, 0.8],
                backgroundColor: generateColors('blue', 11),
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            ...chartDefaults,
            plugins: {
                ...chartDefaults.plugins,
                title: {
                    display: true,
                    text: '深证成指行业分布 (%)',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        }
    });
    
    // CSI 300 Index Sector Distribution
    const csi300ChartCtx = document.getElementById('csi300Chart').getContext('2d');
    new Chart(csi300ChartCtx, {
        type: 'pie',
        data: {
            labels: ['金融', '消费', '医药卫生', '信息技术', '工业', '材料', '能源', '电信服务', '公用事业', '房地产'],
            datasets: [{
                data: [26.8, 18.5, 14.3, 10.6, 9.7, 8.2, 4.8, 3.4, 2.1, 1.6],
                backgroundColor: generateColors('purple', 10),
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            ...chartDefaults,
            plugins: {
                ...chartDefaults.plugins,
                title: {
                    display: true,
                    text: '沪深300行业分布 (%)',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        }
    });
    
    // ChiNext Index Sector Distribution
    const chinextChartCtx = document.getElementById('chinextChart').getContext('2d');
    new Chart(chinextChartCtx, {
        type: 'pie',
        data: {
            labels: ['医药卫生', '信息技术', '工业', '可选消费', '材料', '主要消费', '公用事业', '金融', '能源', '电信服务'],
            datasets: [{
                data: [31.0, 28.0, 14.3, 9.5, 7.2, 4.8, 2.1, 1.6, 0.9, 0.6],
                backgroundColor: generateColors('green', 10),
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            ...chartDefaults,
            plugins: {
                ...chartDefaults.plugins,
                title: {
                    display: true,
                    text: '创业板指行业分布 (%)',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        }
    });
    
    // CSI 500 Index Sector Distribution
    const csi500ChartCtx = document.getElementById('csi500Chart').getContext('2d');
    new Chart(csi500ChartCtx, {
        type: 'pie',
        data: {
            labels: ['工业', '原材料', '信息技术', '医药卫生', '金融', '可选消费', '能源', '公用事业', '主要消费', '房地产'],
            datasets: [{
                data: [22.5, 17.7, 12.9, 11.6, 9.2, 8.4, 6.2, 5.3, 4.1, 2.1],
                backgroundColor: generateColors('orange', 10),
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            ...chartDefaults,
            plugins: {
                ...chartDefaults.plugins,
                title: {
                    display: true,
                    text: '中证500行业分布 (%)',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        }
    });
    
    // Hang Seng Index Sector Distribution
    const hsiChartCtx = document.getElementById('hsiChart').getContext('2d');
    new Chart(hsiChartCtx, {
        type: 'pie',
        data: {
            labels: ['金融业', '资讯科技业', '非必需性消费', '电讯业', '地产建筑业', '能源业', '必需性消费', '公用事业', '医疗保健业', '工业'],
            datasets: [{
                data: [28.5, 20.7, 18.4, 8.3, 7.6, 5.9, 4.3, 3.1, 2.2, 1.0],
                backgroundColor: generateColors('blue', 10),
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            ...chartDefaults,
            plugins: {
                ...chartDefaults.plugins,
                title: {
                    display: true,
                    text: '恒生指数行业分布 (%)',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        }
    });
    
    // Hang Seng China Enterprises Index Sector Distribution
    const hsceiChartCtx = document.getElementById('hsceiChart').getContext('2d');
    new Chart(hsceiChartCtx, {
        type: 'pie',
        data: {
            labels: ['金融业', '资讯科技业', '非必需性消费', '能源业', '电讯业', '必需性消费', '地产建筑业', '医疗保健业', '工业', '公用事业'],
            datasets: [{
                data: [31.2, 22.5, 17.8, 8.2, 5.7, 4.8, 3.9, 3.1, 1.9, 0.9],
                backgroundColor: generateColors('red', 10),
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            ...chartDefaults,
            plugins: {
                ...chartDefaults.plugins,
                title: {
                    display: true,
                    text: '恒生国企指数行业分布 (%)',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        }
    });
    
    // Sector Comparison Across Major Indices
    const sectorComparisonChartCtx = document.getElementById('sectorComparisonChart').getContext('2d');
    new Chart(sectorComparisonChartCtx, {
        type: 'bar',
        data: {
            labels: ['金融/银行', '科技', '消费', '医药', '工业', '材料', '能源', '电信', '公用', '地产'],
            datasets: [
                {
                    label: '沪深300',
                    data: [26.8, 10.6, 18.5, 14.3, 9.7, 8.2, 4.8, 3.4, 2.1, 1.6],
                    backgroundColor: hexToRgba('#6366f1', 0.7),
                    borderColor: '#6366f1',
                    borderWidth: 1
                },
                {
                    label: '创业板指',
                    data: [1.6, 28.0, 14.3, 31.0, 14.3, 7.2, 0.9, 0.6, 2.1, 0],
                    backgroundColor: hexToRgba('#10b981', 0.7),
                    borderColor: '#10b981',
                    borderWidth: 1
                },
                {
                    label: '恒生指数',
                    data: [28.5, 20.7, 22.7, 2.2, 1.0, 0, 5.9, 8.3, 3.1, 7.6],
                    backgroundColor: hexToRgba('#3b82f6', 0.7),
                    borderColor: '#3b82f6',
                    borderWidth: 1
                }
            ]
        },
        options: {
            ...chartDefaults,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '占比 (%)',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 11
                        }
                    }
                }
            },
            plugins: {
                ...chartDefaults.plugins,
                title: {
                    display: true,
                    text: '主要指数行业分布对比',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        }
    });
});
