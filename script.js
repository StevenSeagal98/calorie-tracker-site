const downloadExe = () => {
    const link = document.createElement('a')
    const fileID = '1G60sIeihmoVbpgl-j3UKgKLe6eDAIZkQ'
    link.href = `https://drive.google.com/uc?export=download&id=${fileID}`
    link.download = 'calorie-tracker.exe'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}