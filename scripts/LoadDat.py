class LoadDat:
    name = 'movies'
    inputName = name + '.dat'
    outputName = name + '.csv'

    def __init__(self):
        f = open(LoadDat.inputName, 'r', encoding='iso-8859-1')
        f_new = open(LoadDat.outputName, 'w', encoding='utf-8')
        for line in f:
            newline = line.replace('::', '_')
            f_new.write(newline)

        f.close()
        f_new.close()


loadDat = LoadDat()
