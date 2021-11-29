//эксперимент
let fs = require("fs")
let S = fs.readFileSync("./input.txt", {encoding: "utf-8" , flag:"r"})
let T1="енгаген"
let T2="автомобиль"
let T3="сто сорок восемь от семи, тысяча двест"
let start, per, finish, diff

function GrubSila1(S,T){
    let uns=""
    let i=0
    let m=T.length
    let n=S.length
    while (i<=(n-m)){
        let j=0
        while ((S[i+j]===T[j])&&(j<m))
            j++
        if (j===m)
            uns+=i+" "
        i++
    }
    return(uns)
}
function heshProst2(S,T){
    let i=0
    let hs=0
    let ht=0
    let k=0
    let uns=""
    let m=T.length
    let n=S.length
    while (k<=(m-1)) { //считаем суммы кодов элементов строк
        ht += T.charCodeAt(k)
        hs += S.charCodeAt(k)
        k++
    }
    while (i<=(n-m)){
//console.log(hs,' ',ht)
        if (hs===ht){     //если они совпали, то проверяем посимвольно
            let  j=0
            while ((S[i+j]===T[j])&&(j<m))
                j++
            if(j===m)
                uns+=i+" "
        }
        i++
        if (i<=(n-m))
            hs=hs+S.charCodeAt(i+m-1)-S.charCodeAt(i-1)
    }
    return(uns)
}
function hashRpbinKarp3(S,T){
    let i=0
    let ht=0
    let hs=0
    let k=T.length-1
    let m=T.length
    let n=S.length
    let st2=1
    let uns=""
    while (k >=0) {
        ht+=T.charCodeAt(k)*st2
        hs+=S.charCodeAt(k)*st2
        st2*=2
        k--
    }
    st2=st2/2
    while (i<=(n-m)) {

        if (hs === ht) {
            let j = 0
            while ((S[i + j] === T[j]) && (j < m))
                j++
            if (j === m)
                uns+=i +" "
        }
        i++
        if (i<=(n-m))
            hs=(hs-S.charCodeAt(i-1)*st2)*2+S.charCodeAt(i+m-1)
    }
    return(uns)
}
function MorisPrat4(S,T){
    let uns=""
    let dlT = T.length
    let n=S.length
    mussT = []
    mussT[0] = 0
    let k = 0
    for (let i = 1; i < dlT; i++) {
        while ((k > 0) && (T.charAt(k) !== T.charAt(i)))
            k = mussT[k - 1]
        if (T.charAt(k) === T.charAt(i))
            k++
        mussT[i] = k
    }
    k = 0
    for (let i=0;i<n;i++){
        while((k>0)&&(T.charAt(k)!==S.charAt(i)))
            k=mussT[k-1]
        if (T.charAt(k)===S.charAt(i))
            k++
        if(k===dlT){
            uns+=i-k+1+" "
            k = mussT[k - 1]
        }
    }
    return(uns)
}
function Avtomat5(S,T){
    m=T.length
    n=S.length
    alph=[]
    let uns=""
    for( let i=0;i<m;i++)
        alph[T.charAt(i)]=0
    aut=new Array(m+1)
    for( let j=0;j<=m;j++)
        aut[j]=[]
    for( let c in alph)
        aut [0] [c]=0
    for(let j=0;j<m;j++){
        let prev=aut[j][T.charAt(j)]
        aut[j] [T .charAt(j)]=j+1
        for(let c in alph)
            aut[j+1] [c]=aut [prev] [c]
    }
    let pref = 0
    for (let i = 0; i < n; i++) {
        if (T.indexOf(S[i]) !== -1) {
            pref = aut[pref][S[i]]
        } else
            pref = 0
        if (pref === m)
            uns+=i - m + 1+" "
    }
    return(uns)
}
function BoerMurXorpus6(S,T){
    m=T.length
    n=S.length
    N=[]
    let uns=""
    for( let j=0;j<m-1;j++)
        N[T.charAt(j)]=j+1

    let i=0
    while (i<=(n-m)){
        let j=0
        while ((S[i+j]===T[j])&&(j<m))
            j++
        if (j===m)
            uns+=i+" "

        if (!(N [S[i+ m-1]]))
            i=i+ m
        else
            i=i+ m-N[S[i+ m-1]]
    }
    return(uns)
}
function BoerMur7(S,T){
    m=T.length
    n=S.length
    let uns=""

    StopTable=[]
    for(let j=0;j<m-1;j++)
        StopTable[T.charAt(j)]=j

    suffshift=[]
    z=[]
    let maxZidx = 0
    let maxZ = 0;
    for (let j = 0; j <=m; j++) {
        z[j]=0
        suffshift[j]=m
    }

    for (let j = 1; j < m; j++) {
        if (j <= maxZ)
            z[j] = Math.min(maxZ - j + 1, z[j - maxZidx])
        while (j + z[j] < m && T.charAt(m - 1 - z[j]) === T.charAt(m - 1 - (j + z[j])))
            z[j]++
        if (j + z[j] - 1 > maxZ) {
            maxZidx = j
            maxZ = j + z[j] - 1
        }
    }

    for (let j = m - 1; j > 0; j--)
        suffshift[m - z[j]] = j

    let r = 0
    for (let j = 1;  j <= m - 1; j++)
        if ((j + z[j]) === m)
            for( ; r <= j; r++)
                if (suffshift[r] === m)
                    suffshift[r] = j

    let i=0
    let bound = 0
    while (i<=n-m) {
        let j = m - 1
        while (j >= bound && S[i + j] === T[j]) {
            j--
        }

        if (j < bound) {
            uns+=i+" "
            bound = m - suffshift[0]
            j = -1
            i+=suffshift[0]
        }else {
            bound = 0
            if (StopTable[S[i + j]]) {
                i = Math.max(i + suffshift[j + 1], i + j - StopTable[S[i + j]])
            }
            else
                i = Math.max(i + suffshift[j+1], i + j)
        }
    }
    return(uns)
}

start = new Date()
per=GrubSila1(S,T1)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=heshProst2(S,T1)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=hashRpbinKarp3(S,T1)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=MorisPrat4(S,T1)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=Avtomat5(S,T1)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=BoerMurXorpus6(S,T1)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=BoerMur7(S,T1)
finish = new Date()
diff = finish - start
console.log(per,diff)

console.log("-----------------------------------------------")
start = new Date()
per=GrubSila1(S,T2)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=heshProst2(S,T2)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=hashRpbinKarp3(S,T2)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=MorisPrat4(S,T2)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=Avtomat5(S,T2)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=BoerMurXorpus6(S,T2)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=BoerMur7(S,T2)
finish = new Date()
diff = finish - start
console.log(per,diff)

console.log("-----------------------------------------------")

start = new Date()
per=GrubSila1(S,T3)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=heshProst2(S,T3)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=hashRpbinKarp3(S,T3)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=MorisPrat4(S,T3)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=Avtomat5(S,T3)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=BoerMurXorpus6(S,T3)
finish = new Date()
diff = finish - start
console.log(per,diff)

start = new Date()
per=BoerMur7(S,T3)
finish = new Date()
diff = finish - start
console.log(per,diff)